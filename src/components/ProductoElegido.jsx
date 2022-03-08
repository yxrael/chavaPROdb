import React from 'react'
import { useState} from 'react'

const Producto= ( { key, producto, listadoSeleccion} ) => {

    const { id, pais, nombre, proceso, precio, infoExtra, cantidad, disponible} = producto;
    const [cantidadElegida, setCantidadElegida] = useState(cantidad);

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
                            <p>{proceso} - Precio kg: {precio}</p>
                        </div>
                    </div>    
                </div>
                <div className="col-sm-6">
                    <div className="row m-1 text-center">
                        <div className="col-sm-6 text-right">
                            <label htmlFor="cantidad">Cantidad:</label>
                        </div>
                    </div>
                </div>
            </div>     
            <div className="text-center">
                <p className="badge badge-pill badge-secondary">{infoExtra}</p>
            </div>
        </div>
    )

export default Producto
