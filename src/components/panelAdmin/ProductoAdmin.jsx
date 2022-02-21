import React from 'react'

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

                </div>
        </>
  )
}

export default ProductoAdmin