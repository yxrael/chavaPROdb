import React, { useEffect, useState } from 'react'
import DetallePedido from './DetallePedido';
import { actualizaPedidosDB } from '../../helpers/actualizadorDBAdmin';
import { useDispatch } from 'react-redux';
import { cargaPedidosSinDispatch } from '../../helpers/cargaPedidos';
import { cargaListaPedidos } from '../../actions/listaPedidosAdmin';
import Swal from 'sweetalert2';

const PedidoAdmin = ( producto ) => {

    const dispatch = useDispatch();

    const {pedidoId, date, name, seleccionShort, completado, total, observaciones, tipoCliente, bolsas } = producto.producto;
    const unidades = seleccionShort.length;

    const [ toggleCompletado, setToogleCompletado ] = useState(completado);
    const [ toggleDetalle, setToggleDetalle ] = useState(false);
    const [ muestraDetalle, setMuestraDetalle ] = useState('collapse');

    const handleClick = (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'Estás seguro?',
            text: "Luego podrás volver a cambiar el estado",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sí, cambia el estado!'
          }).then((result) => {
            if (result.isConfirmed) {

                setToogleCompletado( !toggleCompletado);

                const nuevoEstado = {
                    ...producto.producto,
                    completado: toggleCompletado
                }

    
                actualizaPedidosDB( nuevoEstado )
                    .then( () => {
                        cargaPedidosSinDispatch()
                            .then((cargaListado) => {
                                dispatch( cargaListaPedidos(cargaListado) );})
                            .catch((err) => {
                                console.log(err)
                            })})
                    .catch((err) => {
                        console.log(err);
                    });

                Swal.fire(
                    'Estado cambiado'
                )
            }
          })

        

    }

    useEffect(() => {
      
        const nuevoEstado = {
            ...producto.producto,
            completado: toggleCompletado
        }

        actualizaPedidosDB( nuevoEstado );

    }, [toggleCompletado, producto])
    

    const handleDetalle = (e) => {
        e.preventDefault();
        setToggleDetalle( !toggleDetalle);

        if(muestraDetalle === 'collapse') {
            setMuestraDetalle('collapse.show')
        } else { setMuestraDetalle('collapse')};
    }

  return (
    <>
    
        <div  className="container-fluid card bg-light mb-3 d-flex justify-content-between ">
                    
                    <div className="d-flex justify-content-between">
                        <div className="">
                            <div className="mt-2">
                                

                                <div>
                                    <h>Fecha: {date}</h>
                                </div>

                                <div className="">
                                    <p>Nombre cliente:{' '} {name} </p>
                                    <p>Tarifa: {' '}{ tipoCliente}</p>
                                </div>
                                
                            </div>    
                        </div>
                    
                        <div>
                            <p>Productos: <b>{unidades}</b></p>
                            { 
                                (bolsas)
                                &&
                                (<p className='badge bg-secondary p-2'>Bolsas: <b>{bolsas}</b></p>)
                            
                            }
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

                    {
                        observaciones
                        && (
                            <div className={muestraDetalle}>
                                <div className="container card bg-light mb-2 mxwListados">
                                    <p><b>Observaciones:</b></p>
                                    <p>{observaciones}</p>
                                </div>
                            </div>
                        )
                    }   

                    <div>
                        <h6 className=''><small>Pedido: {pedidoId}</small></h6>
                    </div>      

        </div>
        
    </>
  )
}

export default PedidoAdmin