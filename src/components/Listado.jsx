
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { filtrarSeleccion } from '../actions/seleccionActions';
import filtradorPorPais from '../helpers/filtradorPorPais';
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

    const { listado } = useSelector( state => state );

    let listaFiltrada = filtraListadoClientesDisponible( listado );
    
    const { q } = queryString.parse(location.search);

    if(q !== undefined) {
        listaFiltrada = filtradorPorPais( listado, q);
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
