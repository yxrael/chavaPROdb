import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import BotonesFiltrado from '../BotonesFiltrado';
import Producto from '../Producto';
import filtradorPorPais from '../../helpers/filtradorPorPais';
import { useSelector, useDispatch } from 'react-redux';



const ListadoFiltradoPais = ( {listadoSeleccion, setListadoSeleccion }) => {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const { q } = queryString.parse(location.search);

    const state = useSelector( state => state );
    const listaCafes = state.listado;

    const listaFiltrada = filtradorPorPais( listaCafes, q);

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const seleccionados = listadoSeleccion.filter( seleccionado => seleccionado.cantidad !== 0);
    //     // setListadoSeleccion(seleccionados);
    //     localStorage.setItem('listadoCafes', JSON.stringify(seleccionados));
    //     navigate('seleccion');

    // }

    return (
        <section id="cont-listado" className='container-fluid m-2'>

            <BotonesFiltrado />

            <form 
                // onSubmit={ handleSubmit }
                className="contenido primario">

                <h2 id="foco-listado" className="text-center m-3">Selecciona productos:</h2>

                {listaFiltrada.map( producto => {
                        return(
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

export default ListadoFiltradoPais
