import React from 'react'
import { useState} from 'react'
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import { eliminaProducto, modificaProducto } from '../../actions/listadosActions';

const ProductoStockAdmin = ( {producto } ) => {

    const dispatch = useDispatch();
    
    const { id, pais, nombre, proceso, precio, infoExtra, cantidad, disponible, continente} = producto;

    const [cantidadElegida, setCantidadElegida] = useState(cantidad);
    const [ precioPorProducto, setPrecioPorProducto ] = useState(precio);
    // COMPROBAR POR QUÉ NO ESTÁN EN USO!!!!!

    // const handleCambioCantidad = (e) => {

    //     setCantidadElegida(e.target.value);
    //     setPrecioPorProducto( e.target.value * precio );

    //     const cambioCafe = {
    //         "id": id,
    //         "pais": pais,
    //         "nombre": nombre,
    //         "proceso": proceso,
    //         "infoExtra": infoExtra,
    //         "precio": precio,
    //         "cantidad": parseInt(e.target.value),
    //         "disponible": disponible,
    //         "continente": continente
    //     };

    //     dispatch( modificaCantidad( id, cambioCafe ));

    // }

    const handleCambioDispo = (e) => {
        e.preventDefault();

        const cambioCafe = {

            ...producto,
            "disponible": !disponible
        
        };


        dispatch( modificaProducto( id, cambioCafe ) );

    }

    const handleEliminar = (e) => {
        e.preventDefault();

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
              Swal.fire(
                'Borrado!',
                'El producto ha sido eliminado.',
                'success'
              )
            }
          })


        dispatch( eliminaProducto(id) );

    }

    return (

            <div  className="container card bg-light mb-3 d-flex justify-content-between mxwListados">
                <div className="d-flex justify-content-between">
                    <div className="mt-2">
                        <div className="">
                            <div className="">
                                <p><strong>{pais}. {nombre}</strong></p>
                            </div>
                            <div>
                                <p>{proceso}</p>
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
                                <div className="d-flex justify-content-center">
                                    <button 
                                        className='btn btn-danger btn-sm m-2 d-block'
                                        onClick={ handleEliminar }
                                        >
                                            X
                                    </button>
                                </div>

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




    )

}

export default ProductoStockAdmin