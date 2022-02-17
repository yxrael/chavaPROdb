import React from 'react'
import { useDispatch } from 'react-redux';
import { borrarSeleccion } from '../actions/seleccionActions';
import { borraCafes} from '../helpers/borraCafes';

const ProductoSeleccionado = ( {producto } ) => {

    const { id, pais, nombre, proceso, precio, infoExtra, cantidad} = producto;

    const dispatch = useDispatch();

    const handleClick = (id) => {
        const despuesDeBorrado = borraCafes(id);
        // setListadoSeleccion(despuesDeBorrado);
        dispatch( borrarSeleccion( id ));
    }

    return (

        <div  className="container card bg-light mb-3">
            <div className="row">
                <div className="col-sm-6">
                    <div className="row mt-2">
                        <div className="col-sm-6 text-right">
                            <p><strong>{pais}, {nombre}</strong></p>
                        </div>
                    </div>    
                </div>
                <div className="col-sm-6">
                    <div className="row m-1 text-center">

                        <div className="col-sm-6 text-right">
                            <label htmlFor="cantidad">Cantidad:</label>
                        </div>
                        <div className="col-sm-6 mb-2">
                            <p>{cantidad}</p>
                            <p>Subtotal: <b>{precio * cantidad}€/kg</b></p>
                        </div>
                    </div>
                </div>
                <div>
                    <button 
                        className='btn btn-danger btn-sm m-2'
                        onClick={ () => {handleClick(id)} }>
                        X
                    </button>
                </div>
            </div>     
        </div>

    )
}

export default ProductoSeleccionado
