import React from 'react'
import { useState} from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addSeleccion, modificaCantidad } from '../actions/listadosActions';
import { filtrarSeleccion } from '../actions/seleccionActions';


const Producto = ( {producto } ) => {

    const dispatch = useDispatch();
    
    const { id, pais, nombre, proceso, precio, infoExtra, cantidad, disponible, continente} = producto;

    const [cantidadElegida, setCantidadElegida] = useState(cantidad);
    const [ precioPorProducto, setPrecioPorProducto ] = useState(precio);

    const handleCambioCantidad = (e) => {

        setCantidadElegida(e.target.value);
        setPrecioPorProducto( e.target.value * precio );

        const cambioCafe = {
            "id": id,
            "pais": pais,
            "nombre": nombre,
            "proceso": proceso,
            "infoExtra": infoExtra,
            "precio": precio,
            "cantidad": parseInt(e.target.value),
            "disponible": disponible,
            "continente": continente
        };

        dispatch( modificaCantidad( id, cambioCafe ));

    }

    return (

        <div  className="container card bg-light mb-3">
            <div className="row">
                <div className="col-sm-6">
                    <div className="row mt-2">
                        <div className="col-sm-6 text-right">
                            <p><strong>{pais}, {nombre}</strong></p>
                        </div>
                        <div className="col-sm-6 text-right">
                            <p>{proceso}</p>
                            <p>Precio: <b>{precio}€/kg</b></p>
                        </div>
                    </div>    
                </div>
                <div className="col-sm-6">
                    <div className="row m-1 text-center d-flex">
                        <div className="col-sm-6 text-right">
                            <label htmlFor="cantidad">Cantidad:</label>
                            
                        </div>
                        <div className="col-sm-6 mb-2">
                            <input
                                name={id}
                                name='Brasilll'
                                type="number"
                                className="form-control"
                                min="0"
                                max="50"
                                placeholder="Cantidad de kgs:"
                                value={cantidadElegida}
                                onChange={ handleCambioCantidad }
                                />
                                <p>Total: <b>{precioPorProducto}€/kg</b></p>
                        </div>
                    </div>
                </div>
            </div>     
            <div className="text-center">
                <span className='badge rounded-pill bg-warning  text-dark m-2'>{infoExtra}</span>
            </div>
        </div>
    )

}

export default Producto
