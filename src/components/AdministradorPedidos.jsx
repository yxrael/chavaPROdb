import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cargaListaPedidos } from '../actions/listaPedidosAdmin';
import { cargaPedidos } from '../helpers/cargaPedidos';
import ProductoAdmin from './panelAdmin/ProductoAdmin';

const AdministradorPedidos = () => {

 

  // useEffect(() => {

  //   const listaFiltrada = cargaPedidos();
  //   // dispatch(cargaListaPedidos(listaFiltrada));

  // }, []);

  const dispatch = useDispatch();

  useEffect(() => {
  
    const cargaListado = cargaPedidos( dispatch );

  }, [])

  const listaFiltrada = useSelector( state => state.pedidos );
  // console.log( listaFiltrada );



  return (
    <>

      <section id="cont-listado" className='container-fluid m-2'>

            <div 
                className="contenido primario">

                <h2 id="foco-listado" className="text-center m-3">Administrador de pedidos:</h2>

                {listaFiltrada.map( producto => {
                        return (
                            <ProductoAdmin
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
    </>
    
    
  )
}

export default AdministradorPedidos