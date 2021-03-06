import React from 'react'
import Swal from 'sweetalert2';
import Rating from 'react-rating';

// import {
//     LeadingActions,
//     SwipeableList,
//     SwipeableListItem,
//     SwipeAction,
//     TrailingActions,
//   } from 'react-swipeable-list';
//   import 'react-swipeable-list/dist/styles.css';

import { useDispatch } from 'react-redux';
import { eliminaProducto, modificaProducto } from '../../actions/listadosActions';
import { actualizaListadoDB, borraProducto, borraImagenProducto } from '../../helpers/actualizadorDBAdmin';

const ProductoStockAdmin = ( {producto, setNuevoItem, setModoEdicion, setCafeEdicion } ) => {

    const dispatch = useDispatch();
    
    const { id, pais, nombre, proceso, precio, infoExtra, disponible, descafeinado, continente, tipoCliente, puntos, rutaURL } = producto;

    const handleCambioDispo = (e) => {
        e.preventDefault();

        const cambioCafe = {

            ...producto,
            "disponible": !disponible
        
        };

        dispatch( modificaProducto( id, cambioCafe ) );
        actualizaListadoDB( cambioCafe );

        Swal.fire(
            'Hecho!',
            'Disponibilidad cambiada.',
            'success'
        )

    }

    const handleEliminar = (e) => {

        Swal.fire({
            title: 'Estás seguro?',
            text: "La eliminación no se podrá deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, bórralo!'
          }).then((result) => {
            if (result.isConfirmed) {

                dispatch( eliminaProducto(id) );
                borraProducto(id);

                Swal.fire(
                    'Borrado!',
                    'El producto ha sido eliminado.',
                    'success'
                )
            }
          })
    }

    const handleEditar = (e) => {

        setModoEdicion(producto.id);
        setCafeEdicion(producto);
        setNuevoItem(true);
    }

    // const leadingActions = () => (
    //     <LeadingActions>
    //       <SwipeAction onClick={handleEditar}>
    //         <div className='swipes__leading font-weight-bold'>
    //             <p>EDITAR</p>
    //         </div>
    //       </SwipeAction>
    //     </LeadingActions>
    //   );
      
    //   const trailingActions = () => (
    //     <TrailingActions>
    //       <SwipeAction
    //         onClick={handleEliminar}
    //       >
    //           <div className='swipes__trail font-weight-bold'>
    //             <p>BORRAR</p>
    //           </div>
    //       </SwipeAction>
    //     </TrailingActions>
    //   );

    const handleEliminarImagen = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Eliminar imagen?',
            text: "La eliminación no se podrá deshacer!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, bórrala!'
          }).then((result) => {
            if (result.isConfirmed) {

                dispatch( eliminaProducto(id) );
                borraImagenProducto(id);

                Swal.fire(
                    'Borrada!',
                    'La imagen del producto ha sido eliminada.',
                    'success'
                )
            }
          })
    }

    return (

        <div>

        {/* <SwipeableList>
            <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
            > */}

                <div  className="container-fluid card bg-light mb-3">
                {/* <div  className=" card bg-light mb-3 d-flex justify-content-between"> */}

                    <div className='row'>                     

                        <div className='col-12'>

                            <div className="d-flex justify-content-center">
                                <p><strong>{pais}. {nombre}</strong></p>
                            </div>

                            <div className="d-flex justify-content-around align-items-center">
                                 
                                        <div className="mt-2">
                                            <div className="">
                                                    <p>Precio: <b>{precio}€/kg</b></p>

                                                    <div className="d-flex justify-content-start">
                                                        {
                                                            tipoCliente === 'tostado'
                                                            ?
                                                            <p className='badge bg-secondary'><strong>{tipoCliente}</strong></p>
                                                            :
                                                            <p className='badge bg-success'><strong>{tipoCliente}</strong></p>
                                                        }
                                                    </div>
                                            </div>    
                                        </div>

                                        {/* {
                                            puntos
                                            &&
                                            (
                                                <div className="m-2 d-flex flex-column align-items-center justify-content-center bg-secondary text-white p-2 card">
                                                        <div>
                                                            <p className=''>PUNTOS:</p>
                                                            <div className='d-flex justify-content-center'>
                                                                <b>{ puntos }</b> 
                                                            </div>
                                                        </div> 
                                                        <Rating
                                                            start='0'
                                                            stop='5'
                                                            fractions='20'
                                                            initialRating={ puntos / 20 }
                                                            readonly='true'
                                                        />
                                                </div>
                                            )
                                        } */}
                                        
                                        
                                        <div className="mt-2">
                                            <div className="">
                                                <p><b>{continente}</b></p>       
                                            </div>
                                            {
                                                (descafeinado === true)
                                                &&
                                                (
                                                    <div className="d-flex justify-content-center">
                                                        <p className='badge bg-secondary'><strong>DESCAFEINADO</strong></p>
                                                    </div>
                                                    
                                                )
                                            }
                                            <div>
                                                <p>{proceso}</p>
                                            </div>

                                        </div>
                                    
                                    </div>  

                                    {
                                        puntos
                                        &&
                                        (
                                            <div className="m-2 d-flex flex-column align-items-center justify-content-center p-2 card">
                                                    <div>
                                                        <p className=''>PUNTOS: <b>{ puntos }</b> </p>
                                                    </div> 
                                                    <Rating
                                                        start='0'
                                                        stop='5'
                                                        fractions='20'
                                                        initialRating={ puntos / 20 }
                                                        readonly='true'
                                                    />
                                            </div>
                                        )
                                    }

                            <div className="d-flex justify-content-center">
                                <span className='badge rounded-pill bg-warning  text-dark m-2'><small>{infoExtra}</small></span>
                            </div> 
                                                
                            <div className=" d-flex align-items-center justify-content-between">

                                <div>
                                    <p className='m-2'>Disponible: <strong>
                                        {
                                        disponible
                                        ? (
                                            <span className='text-success m-2'>SI </span>   
                                        )
                                        :
                                        (
                                            <span className='text-danger m-2'>NO </span>
                                        )
                                        }    

                                    </strong></p>
                                </div>

                                {
                                    rutaURL
                                    &&
                                    (
                                        <div className='d-flex justify-content-center'>
                                            <button
                                            className='btn btn-light'
                                            onClick={ handleEliminarImagen }>
                                                <i className="fa-solid fa-image text-danger"></i>
                                            </button>
                                            
                                        </div>
                                        
                                    )
                                }
                                <button 
                                    className='btn btn-info btn-sm m-2 d-block mb-3'
                                    onClick={ handleCambioDispo }
                                    >
                                        Dispo: SI/NO
                                </button>

                            </div>

                            
                                
                        </div>

                        <div className=' d-flex col '>
                            <div
                                onClick={ handleEditar }
                                className='col m-2 bg-warning fas fa-edit text-light d-flex align-items-center justify-content-center p-2'>
                            </div>
                            <div
                                onClick={ handleEliminar }
                                className='col m-2 bg-danger fas fa-trash-alt text-light d-flex align-items-center justify-content-center p-2'>    
                            </div>
                        </div>

                    </div>

                </div>
                          
            {/* </SwipeableListItem>
        </SwipeableList> */}

        </div>

    )

    

}

export default ProductoStockAdmin