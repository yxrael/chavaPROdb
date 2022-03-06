import React, { useState } from 'react'
import DetallePedido from './../components/panelAdmin/DetallePedido';



const PedidoCliente = ( producto ) => {

    const {pedidoId, date, uid, name, seleccionShort, completado, total } = producto.producto;
    const unidades = seleccionShort.length;


    const [ toggleCompletado, setToogleCompletado ] = useState(completado);
    const [ toggleDetalle, setToggleDetalle ] = useState(false);
    const [ muestraDetalle, setMuestraDetalle ] = useState('collapse');


    // const handleClick = (e) => {
    //     e.preventDefault();
    //     setToogleCompletado( !toggleCompletado);


    // }

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

                                {/* <div className="">
                                    <p>ID Cliente: {uid}</p>
                                    <p>Nombre cliente:{' '} {name} </p>
                                </div> */}
                                
                            </div>    
                        </div>
                    
                        <div>
                            <p>Unidades: <b>{unidades}</b></p>
                            <p><b>Total: { total }€</b></p>
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
                                        <i className="fa-solid fa-toggle-on"></i>
                                    </button>
                                )
                                :
                                (
                                        <button 
                                        className='btn btn-secondary m-2'
                                        onClick={ handleDetalle }
                                        >
                                            Detalle{' '}
                                            <i className="fa-solid fa-toggle-off"></i>   
                                        </button>                 
                                )
                    }

                    {  completado
                            ? (
                                <div 
                                    className='alert alert-success m-2'
                                >
                                    Enviado
                                </div>
                            )
                            :
                            (
                                <div 
                                    className='alert alert-warning m-2'
                                    >
                                        Sin enviar
                                </div>
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


                    </div>
                    

        </div>
        
    </>
  )
}

export default PedidoCliente