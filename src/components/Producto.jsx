import React from 'react'
import { useState} from 'react'

import { useDispatch } from 'react-redux';
import { modificaProducto } from '../actions/listadosActions';



const Producto = ( {producto } ) => {

    const dispatch = useDispatch();
    
    const { id, pais, nombre, proceso, precio, infoExtra, cantidad, disponible, descafeinado, continente} = producto;

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

    return (
        <>            
            <div  className="container card bg-light mb-2 d-flex justify-content-between mxwListados">
                <div className="d-flex justify-content-center mt-2">
                    <p><strong>{pais}, {nombre}</strong></p>
                </div>

                <div className="d-flex justify-content-between mt-1">
                    <div className="">
                                                  
                            <div>
                                <p>{proceso}</p>
                            </div>
                            <div className="">
                                <p>Precio: <b>{precio}€/kg</b></p>
                            </div>
                               
                    </div>
                    <div>
                        

                    </div>
                    <div className="">
                        <div className="">
                                      
                        </div>
                    </div>
                    <div>
                        
                        <div className="mb-2">
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
                        </div>
                        <div className="mt-2 d-flex justify-content-end">
                        <p>Total: <b>{precioPorProducto}€/kg</b></p>
                        </div>
                        
                    </div>
                </div>

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

            </div>
        </>



    )

}

export default Producto
