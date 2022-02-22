import React from 'react'

const DetallePedido = ( producto ) => {


    const { nombre, pais, proceso, cantidad } = producto.producto;

  return (
    <>
    
        <div  className="container card bg-light mb-2 mxwListados">
                    
                    <div className="d-flex justify-content-around mt-2">
                        
                            
                                <div className="">
                                    <p><strong>{nombre}</strong></p>
                                </div>

                                <div>
                                    <p>{pais}</p>
                                </div>

                                <div className="">
                                    <p>{proceso}</p>
                                </div>
                                
                               
                        
                    
                        <div>
                            <p>Unidades: <b>{cantidad}</b></p>
                        </div>
                    </div>

                </div>
        </>
  )
}

export default DetallePedido