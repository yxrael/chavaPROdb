import React from 'react'
import { useState} from 'react'
import Swal from 'sweetalert2';
import { store } from '../../store/store';

import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions,
  } from 'react-swipeable-list';
  import 'react-swipeable-list/dist/styles.css';


import { useDispatch } from 'react-redux';
import { eliminaProducto, modificaProducto } from '../../actions/listadosActions';
import { actualizaListadoDB } from '../../helpers/actualizadorDBAdmin';



const ProductoStockAdmin = ( {producto, setNuevoItem, modoEdicion, setModoEdicion, cafeEdicion, setCafeEdicion } ) => {

    const dispatch = useDispatch();
    
    const { id, pais, nombre, proceso, precio, infoExtra, cantidad, disponible, continente} = producto;

    const [cantidadElegida, setCantidadElegida] = useState(cantidad);
    const [ precioPorProducto, setPrecioPorProducto ] = useState(precio);

    const handleCambioDispo = (e) => {
        e.preventDefault();

        const cambioCafe = {

            ...producto,
            "disponible": !disponible
        
        };

        dispatch( modificaProducto( id, cambioCafe ) );

        const actual = store.getState();
        actualizaListadoDB( actual.listado );

    }

    const handleEliminar = (e) => {
        // e.preventDefault();

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
        
                const actual = store.getState();
                actualizaListadoDB( actual.listado );

                Swal.fire(
                    'Borrado!',
                    'El producto ha sido eliminado.',
                    'success'
                )
            }
          })

    }

    const handleEditar = (e) => {
        // e.preventDefault();

        setModoEdicion(producto.id);
        setCafeEdicion(producto);
        
        setNuevoItem(true);
    }


    const leadingActions = () => (
        <LeadingActions>
          <SwipeAction onClick={handleEditar}>
            <div className='swipes__leading font-weight-bold'>
                <p>EDITAR</p>
            </div>
          </SwipeAction>
        </LeadingActions>
      );
      
      const trailingActions = () => (
        <TrailingActions>
          <SwipeAction
            onClick={handleEliminar}
          >
              <div className='swipes__trail font-weight-bold'>
                <p>BORRAR</p>
              </div>
          </SwipeAction>
        </TrailingActions>
      );

    return (

        <SwipeableList>
            <SwipeableListItem
            leadingActions={leadingActions()}
            trailingActions={trailingActions()}
            >

                <div  className="container card bg-light mb-3 d-flex justify-content-between mxwListados">

                    <div className='row'>

                        <div className='col-1 bg-warning fas fa-edit text-light d-flex align-items-center justify-content-center'>

                        </div>

                            <div className='col-10'>

                                <div className="d-flex justify-content-between">
                                    <div className="mt-2">
                                        <div className="">
                                            <div className="">
                                                <p><strong>{pais}. {nombre}</strong></p>
                                            </div>
                                                
                                            <div className="">
                                                <p>Precio: <b>{precio}€/kg</b></p>
                                            </div>
                                                
                                        </div>    
                                    </div>

                                    <div className="mt-2">
                                        <div className="">
                                            <p><b>{continente}</b></p>       
                                        </div>
                                        <div>
                                            <p>{proceso}</p>
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        
                                                <p>Disponible: <strong>
                                                    {
                                                    disponible
                                                    ? (
                                                        <span className='text-success'>SI </span>   
                                                    )
                                                    :
                                                    (
                                                        <span className='text-danger'>NO </span>
                                                    )
                                                    }    

                                                </strong></p>
                                                <button 
                                                    className='btn btn-info btn-sm m-2 d-block'
                                                    onClick={ handleCambioDispo }
                                                    >
                                                        Dispo: SI/NO
                                                </button>
                                                {/* <div className="d-flex justify-content-center">
                                                    <button 
                                                        className='btn btn-danger btn-sm m-2 d-block'
                                                        onClick={ handleEliminar }
                                                        >
                                                            X
                                                    </button>
                                                </div>
                                                <div className="d-flex justify-content-center">
                                                    <button 
                                                        className='btn btn-warning btn-sm m-2 d-block'
                                                        onClick={ handleEditar }
                                                        >
                                                            Editar
                                                    </button>
                                                </div> */}

                                    </div>
                                        
                                        {/* <div className="mt-2">
                                            
                                            <div className="mb-2">
                                                    <input
                                                        name={id}
                                                        type="number"
                                                        className="form-control"
                                                        min="0"
                                                        max="50"
                                                        placeholder="Cantidad de kgs:"
                                                        value={cantidadElegida}
                                                        onChange={ handleCambioCantidad }
                                                    />
                                            </div>
                                            <p>Total: <b>{precioPorProducto}€/kg</b></p>
                                        </div> */}
                                </div>   
                                    
                                <div className="text-center">
                                    <span className='badge rounded-pill bg-warning  text-dark m-2'>{infoExtra}</span>
                                </div>
                                    
                            </div>

                        <div className='col-1 bg-danger fas fa-trash-alt text-light d-flex align-items-center justify-content-center'>    

                        </div>

                    </div>

                </div>
                    


                    
            </SwipeableListItem>
        </SwipeableList>



    )

}

export default ProductoStockAdmin