import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cargaPedidosSinDispatch } from '../../helpers/cargaPedidos';
import { cargaListaPedidos } from '../../actions/listaPedidosAdmin';
import PedidoAdmin from './PedidoAdmin';
import queryString from 'query-string';
import { filtradorPedidosPorFecha } from '../../helpers/filtradores';

const AdministradorPedidos = ( {setVista, fechasFiltrado, toggleEstado, setToggleEstado} ) => {

  const dispatch = useDispatch();
  const location = useLocation();

  let listadoPedidos = [];

  useEffect(() => {

    setVista('pedidos');
  
    cargaPedidosSinDispatch( )
      .then((cargaListado) => {
        dispatch( cargaListaPedidos(cargaListado) );})
      .catch((err) => {
        console.log(err)
      });   

  }, [ dispatch, setVista, fechasFiltrado ]);

      listadoPedidos = useSelector( state => state.pedidos )

      const { q } = queryString.parse(location.search);

      if(q !== undefined) {
        listadoPedidos = filtradorPedidosPorFecha( listadoPedidos, q[0], q[1], toggleEstado );
      }

  return (
    <>

      <section id="cont-listado" className='container-fluid m-2'>

            <div 
                className="container-fluid contenido primario">

                <h2 id="foco-listado" className="text-center m-3">Administrador de pedidos:</h2>

                {listadoPedidos.map( producto => {
                        return (
                            <PedidoAdmin
                                key={producto.pedidoId}
                                producto={producto}
                                toggleEstado={toggleEstado}
                                setToggleEstado={setToggleEstado}
                            />
                        )
                    })
                }

                <div className='d-flex justify-content-center m-3'>

                </div>
                

            </div>
        </section>
    </>
    
  )
}

export default AdministradorPedidos