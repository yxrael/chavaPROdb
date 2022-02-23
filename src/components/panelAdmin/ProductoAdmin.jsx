import React, { useState } from 'react'
import DetallePedido from './DetallePedido';



const ProductoAdmin = ( producto ) => {

    const {pedidoId, date, uid, name, seleccionShort, completado } = producto.producto;
    const unidades = seleccionShort.length;

    const [ toggleCompletado, setToogleCompletado ] = useState(completado);
    const [ toggleDetalle, setToggleDetalle ] = useState(false);
    const [ muestraDetalle, setMuestraDetalle ] = useState('collapse');


    const handleClick = (e) => {
        e.preventDefault();
        setToogleCompletado( !toggleCompletado);
    }

    const handleDetalle = (e) => {
        e.preventDefault();
        setToggleDetalle( !toggleDetalle);

        if(muestraDetalle === 'collapse') {
            setMuestraDetalle('collapse.show')
        } else { setMuestraDetalle('collapse')};
    }

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
                                    <p>ID Cliente: {uid}</p>
                                    <p>Nombre cliente:{' '} {name} </p>
                                </div>
                                
                            </div>    
                        </div>
                    
                        <div>
                            <p>Unidades: <b>{unidades}</b></p>
                        </div>
                        
                    </div>


                    <div className='d-flex justify-content-around mb-2'>
                    {  toggleDetalle
                                ? (
                                    <button 
                                        className='btn btn-info m-2'
                                        onClick={ handleDetalle }
                                    >
                                        Detalle{' '}
                                        <i class="fa-solid fa-toggle-on"></i>
                                    </button>
                                )
                                :
                                (
                                        <button 
                                        className='btn btn-secondary m-2'
                                        onClick={ handleDetalle }
                                        >
                                            Detalle{' '}
                                            <i class="fa-solid fa-toggle-off"></i>   
                                        </button>                 
                                )
                    }

                    {  toggleCompletado
                            ? (
                                <button 
                                    className='btn btn-success m-2'
                                    onClick={ handleClick }
                                >
                                    Enviado
                                </button>
                            )
                            :
                            (
                                <button 
                                    className='btn btn-warning m-2'
                                    onClick={ handleClick }
                                    >
                                        Enviar
                                </button>
                            )
                    }
  

                    </div>
                        


                    <div className={muestraDetalle}>
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




                        
                        {/* <button 
                            className='btn btn-warning m-2'
                            // onClick={ handleClick }
                            >
                            Revisar
                        </button> */}

                    </div>
                    

        </div>
        
    </>
  )
}

export default ProductoAdmin