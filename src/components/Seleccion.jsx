import { useNavigate } from 'react-router-dom';
import { actualizadorLista, actualizadorUnidadesLista } from '../helpers/actualizadorLista';
import ProductoSeleccionado from './ProductoSeleccionado';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import moment from 'moment';
import { enviaPedido, enviaPedidoDB } from '../actions/enviaPedidoActions';
import { uniqueId } from '../helpers/creaIdAleatorio';
import { useForm } from '../hooks/useForm';
import { muestraError } from '../helpers/muestraError';
import { useEffect, useState } from 'react';

const Seleccion = () => {

    const navigate = useNavigate();

    const { uid, name, tipoCliente } = useSelector( state => state.auth );
    const seleccion = useSelector( state => state.seleccion );
 
    const pedidoId = uniqueId('p_');
    const date = moment( new Date() ).format('DD/MM/YYYY');

    const observacionesInit = {
        observaciones: '',
        bolsas: 0
    }

    const [ formValues, handleInputChange ] = useForm( observacionesInit);
    const { observaciones, bolsas } = formValues;

    const [ precioTotal , setPrecioTotal ] = useState( actualizadorLista( seleccion, bolsas ) );
    const [ unidadesTotal, setUnidadesTotal ] = useState( actualizadorUnidadesLista( seleccion ) );
  
    const handleClick = () => {
        navigate('/filtered');
    }

    const enviarPedido = () => {

        const pedidoObj = {
            date,
            uid,
            name,
            pedidoId,
            precioTotal,
            tipoCliente,
            observaciones,
            completado: false,
            seleccion,
            bolsas
          };

        enviaPedido( pedidoObj );
        enviaPedidoDB( pedidoObj )
            .then(() => {

                Swal.fire(
                    '¡Gracias!',
                    'Tu pedido ha sido enviado',
                    'success'
                  );
        
                navigate('/mispedidos');

            }).catch((err) => {
                muestraError( 'Error al enviar el pedido', 'Contacta con soporte@mrchava.es' );
                console.log(err)
            });
    }
    
    let granTotal = 0;
    // const unidadesTotal = actualizadorUnidadesLista( seleccion );
    
    if(unidadesTotal < 6){
        granTotal = precioTotal + 6;
    }

    useEffect(() => {
      
        setPrecioTotal( actualizadorLista( seleccion, bolsas ) );

    }, [bolsas, seleccion ])
    
    return (

        <>

            <div id="cont-seleccion" className='container-fluid m-2'>

                    <h2 id="foco-listado" className="text-center m-3">Productos seleccionados:</h2>

                        { seleccion.map( producto => (

                                            <ProductoSeleccionado
                                                key={producto.id}
                                                producto={producto}
                                                setUnidadesTotal={setUnidadesTotal}

                                            />
                        ) )} 

                    <div  className="container card bg-light mb-3">
                        <div className="mb-2">
                                <div className="mt-1 d-flex justify-content-start">
                                    <label className="mb-2" htmlFor="cantidad"><b>¿Quieres añadir bolsas al pedido?</b> (0,50€ / unidad)</label>
                                    <span className="mb-2"><b>Nota: cada unidad es una bolsa.</b></span>
                                </div>
                                    
                                    <input
                                        name='bolsas'
                                        type="number"
                                        className="form-control"
                                        min="0"
                                        max="1000"
                                        placeholder="Cantidad de bolsas:"
                                        value={ bolsas }
                                        id='bolsas'
                                        autoFocus={true}
                                        onChange={ handleInputChange }
                                    />
                            </div>
                    </div>

                    <p className='d-flex justify-content-center m-3'>Total: &nbsp; <b>{precioTotal}€</b></p>

                    {
                        (granTotal !== 0 && tipoCliente === 'tostado')
                        &&
                        (
                            <div className="container card bg-light mb-3 p-3 w-50">
                                <p>Pedidos menos de 10kg</p>
                                <p>6€ gastos de envío</p>
                                <p className='d-flex justify-content-center'><b>Total + envío: {granTotal}€</b></p>
                            </div>
                            
                        )
                    }
                    {
                        (granTotal === 0 && tipoCliente === 'tostado')
                        &&
                        (
                            <div className="container card bg-light mb-3 p-3 w-50">
                                <p>Envío gratuito a partir de 10kg. Resto de envíos 6€</p>
                                <p className='d-flex justify-content-center'><b>El envío de este pedido es gratuíto</b></p>
                            </div>
                        )
                    }

                    <p className='d-flex justify-content-center m-3'><b>IVA no incluído</b></p>

                    {
                        (seleccion.length === 0)
                            && (
                                <div className='d-flex justify-content-around m-5'>
                                    <p>No tienes ningún producto seleccionado</p>
                                </div>
                                )
                    }                    

                    {
                        (seleccion.length > 0)
                        &&
                        (
                            <div className="container card bg-light mb-3 p-3">
                                <form>
                                <div className='form-group'>
                                            <label htmlFor='nombre'>Observaciones:</label>
                                            <input
                                                type='textarea'
                                                placeholder='Indica cualquier comentario, sugerencia o asunto relacionado con este pedido'
                                                name='observaciones'
                                                className='form-control'
                                                autoComplete='off'
                                                value={ observaciones }
                                                id='observaciones'
                                                onChange={ handleInputChange }
                                            />
                                        </div>
                                </form>
                            </div>
                        )
                    }

                    <div className='d-flex justify-content-around m-5'>
            
                        <button 
                            className='btn btn-secondary '
                            onClick={ handleClick }>
                            Atrás
                        </button>

                        {
                            (seleccion.length > 0)
                                && (
                                    <button 
                                        className='btn btn-primary '
                                        onClick={ enviarPedido }>
                                        Confirmar Pedido
                                    </button>
                                )
                        }
                        
                    </div>
    
            </div>

            
        </>

    )

}

export default Seleccion
