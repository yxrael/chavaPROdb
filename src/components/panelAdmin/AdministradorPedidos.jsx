import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cargaPedidos } from '../../helpers/cargaPedidos';
import ProductoAdmin from './ProductoAdmin';

const AdministradorPedidos = () => {

  const dispatch = useDispatch();

  useEffect(() => {
  
    const cargaListado = cargaPedidos( dispatch );

  }, [])

  const listaFiltrada = useSelector( state => state.pedidos );

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