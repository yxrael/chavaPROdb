import React from 'react'

const DetallePedido = ( producto ) => {

    const { nombre, pais, proceso, cantidad } = producto.producto;

  return (
    <>
    
        <div  className="container card bg-light mb-2 mxwListados">
                    
                    <div className="row mt-2">
                        
                            
                                <div className="col">
                                    <p><strong>{nombre}</strong></p>
                                    <p>{pais}</p>
                                </div>

                                <div className="col">
                                    <p>{proceso}</p>
                                    <div className='d-flex justify-content-end'>
                                        <p>Unidades: <b>{cantidad}</b></p>
                                    </div>
                                    
                                </div>
                                
                    </div>

                </div>
        </>
  )
}

export default DetallePedido