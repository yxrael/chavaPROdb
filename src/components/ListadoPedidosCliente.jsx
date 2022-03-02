import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cargaPedidosCliente } from '../helpers/cargaPedidos';
import ConfirmaEnvio from './ConfirmaEnvio';
import PedidoCliente from './PedidoCliente';



const ListadoPedidosCliente = () => {

  const dispatch = useDispatch();
  const { uid } = useSelector( state => state.auth );

  useEffect(() => {
  
    cargaPedidosCliente( uid, dispatch );

  }, [])

  const listaFiltrada = useSelector( state => state.pedidos );

  return (
    <>

      <section id="cont-listado" className='container-fluid m-2'>

            <div 
                className="contenido primario">

                <h2 id="foco-listado" className="text-center m-3">Mis pedidos:</h2>

                {listaFiltrada.map( producto => {
                        return (
                            <PedidoCliente
                                key={producto.pedidoId}
                                producto={producto}
                            />
                        )
                    })
                }

                <div className='d-flex justify-content-center m-3'>

                </div>
              
            </div>
        </section>

        <ConfirmaEnvio />
    </>
    
  )
}

export default ListadoPedidosCliente