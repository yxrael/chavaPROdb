import React from 'react'
import DetallePedido from './DetallePedido';


const ProductoAdmin = ( producto ) => {

    const {pedidoId, date, uid, seleccionShort} = producto.producto;
    const unidades = seleccionShort.length;

  return (
    <>
    
        <div  className="container card bg-light mb-3 d-flex justify-content-between mxwListados">
                    
                    <div className="d-flex justify-content-between">
                        <div className="">
                            <div className="mt-2">
                                <div className="">
                                    <p><strong>Pedido: {pedidoId}</strong></p>
                                </div>

                                <div>
                                    <p>Fecha: {date}</p>
                                </div>

                                <div className="">
                                    <p>Cliente: {uid}</p>
                                </div>
                                
                            </div>    
                        </div>
                    
                        <div>
                            <p>Unidades: <b>{unidades}</b></p>
                        </div>
                        
                    </div>
                        


                    <div>
                        {seleccionShort.map( producto => {
                            return (
                                <DetallePedido
                                    key={producto.id}
                                    producto={producto}
                                />
                            )
                        })
                        }
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button 
                            className='btn btn-success m-2'
                            // onClick={ handleClick }
                            >
                            Enviado
                        </button>
                        <button 
                            className='btn btn-warning m-2'
                            // onClick={ handleClick }
                            >
                            Revisar
                        </button>

                    </div>
                    

        </div>
        
    </>
  )
}

export default ProductoAdmin