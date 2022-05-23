import React from 'react';
import { useState} from 'react';
import Rating from 'react-rating';

import { useDispatch } from 'react-redux';
import { modificaProducto } from '../actions/listadosActions';
import PopUpResumen from './PopUpResumen';

const Producto = ( {producto, muestraDetalle, setMuestraDetalle, cafeSeleccionado, setCafeSeleccionado } ) => {

    const dispatch = useDispatch();

    
    
    const { id, pais, nombre, proceso, precio, infoExtra, cantidad, descafeinado, puntos, rutaURL } = producto;

    const [cantidadElegida, setCantidadElegida] = useState(cantidad);
    const [ precioPorProducto, setPrecioPorProducto ] = useState(0);

    const handleCambioCantidad = (e) => {

        setCantidadElegida(e.target.value);
        setPrecioPorProducto( e.target.value * precio );

        const cambioCafe = {
            ...producto,
            "cantidad": parseInt(e.target.value)
        };

        dispatch( modificaProducto( id, cambioCafe ));

    }

    const handleDetalle = (e) => {
        e.preventDefault();
        setCafeSeleccionado(producto);
        setMuestraDetalle(true)
    }

    return (
        <>            
            <div  className="container-fluid card bg-light mb-2 d-flex justify-content-between">
                <div className="d-flex justify-content-center mt-2">
                    <p><strong>{pais}, {nombre}</strong></p>
                    
                    
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

                <div className="d-flex justify-content-between mt-1">
                    <div className="d-flex flex-column justify-content-center">
                                                  
                            <div>
                                <p>{proceso}</p>
                            </div>
                            <div className="">
                                <p>Precio: <b>{precio}€/kg</b></p>
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
                            </div>
                        )
                    } */}


                    <div className='d-flex flex-column justify-content-center align-items-center mt-1'>
                        {/* <div className="mb-2"> */}
                            <div className="mt-1 d-flex justify-content-end">
                                <label className="" htmlFor="cantidad">Cantidad:</label>
                            </div>
                                 
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
                        {/* </div> */}
                        <div className="mt-2 d-flex justify-content-end">
                        <p>Total: <b>{precioPorProducto}€/kg</b></p>
                        </div>
                        
                    </div>
                </div>

                

                <div className="text-center mb-2">
                    
                    {
                        rutaURL
                        &&
                        (
                            <button
                                // className='btn btn-primary'
                                className='badge rounded-pill bg-secondary text-light'
                                onClick={ handleDetalle }
                                type='submit'>
                                    Detalle
                            </button>
                        )
                    }

                    
                    {
                        muestraDetalle
                        &&
                        <PopUpResumen
                            muestraDetalle={muestraDetalle}
                            setMuestraDetalle={setMuestraDetalle}
                            cafeSeleccionado={cafeSeleccionado}
                            setCafeSeleccionado={setCafeSeleccionado}
                        />
                    }
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

                {
                    infoExtra
                    &&
                    (
                        < div className="text-center">
                    {
                        descafeinado
                        ?
                        (
                            <span className='badge rounded-pill bg-info  text-light m-2'>{infoExtra}</span>
                        )
                        :
                        (
                            
                            <span className='badge rounded-pill bg-warning mb-2  text-dark'><small>{infoExtra}</small></span>
                            
                        )
                    } 
                        </div> 
                    )
                }

                

            </div>
        </>

    )

}

export default Producto
