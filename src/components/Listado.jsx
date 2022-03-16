
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState }from 'react';
import { filtrarSeleccion } from '../actions/seleccionActions';
import {filtradorPorPais} from '../helpers/filtradores';
import { localStorageUpdater } from '../helpers/localStorageUpdater';
import { store } from '../store/store';
import BotonesFiltrado from './BotonesFiltrado';
import Producto from './Producto';
import queryString from 'query-string';
import { filtraListadoClientesDisponible } from '../actions/listadosActions';


const Listado = () => {

    const dispatch = useDispatch();

    const location = useLocation();
    const navigate = useNavigate();

    const { listado, auth } = useSelector( state => state );
    const [ muestraDetalle, setMuestraDetalle ] = useState(false);
    const [ cafeSeleccionado, setCafeSeleccionado ] = useState('');

    let listaFiltrada = filtraListadoClientesDisponible( listado, auth.tipoCliente );
    
    const { q } = queryString.parse(location.search);

    if(q !== undefined) {
        listaFiltrada = filtradorPorPais( listado, q, auth.tipoCliente);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch( filtrarSeleccion( listado ));

        const {seleccion} = store.getState();

        localStorageUpdater( seleccion );
       
        navigate('/seleccion');
    };

    return (
        <section id="cont-listado" className='container-fluid m-2'>

            <BotonesFiltrado />

            <form 
                onSubmit={ handleSubmit }
                className="contenido primario">

                <h2 id="foco-listado" className="text-center m-3">Selecciona productos:</h2>

                {listaFiltrada.map( producto => {
                        return (
                            <Producto
                                key={producto.id}
                                producto={producto}
                                muestraDetalle={muestraDetalle}
                                setMuestraDetalle={setMuestraDetalle}
                                cafeSeleccionado={cafeSeleccionado}
                                setCafeSeleccionado={setCafeSeleccionado}
                            />
                        )
                    })
                }

                <div className='d-flex justify-content-center m-3'>

                    <button 
                        className='btn btn-primary '>
                        Enviar
                    </button>
                </div>
                
            </form>
        </section>
    )
}

export default Listado
