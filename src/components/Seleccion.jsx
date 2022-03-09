import { useNavigate } from 'react-router-dom';
import { actualizadorLista } from '../helpers/actualizadorLista';
import ProductoSeleccionado from './ProductoSeleccionado';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import moment from 'moment';
import { enviaPedido, enviaPedidoDB } from '../actions/enviaPedidoActions';
import { uniqueId } from '../helpers/creaIdAleatorio';
import { useForm } from '../hooks/useForm';

const Seleccion = () => {

    const navigate = useNavigate();

    const { uid, name } = useSelector( state => state.auth );
    const seleccion = useSelector( state => state.seleccion );
 
    const pedidoId = uniqueId('p_');
    const date = moment( new Date() ).format('DD/MM/YYYY');  

    const observacionesInit = {
        observaciones: ''
    }

    const [ formValues, handleInputChange ] = useForm( observacionesInit);
    const { observaciones } = formValues;
  
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
            observaciones,
            completado: false,
            seleccion
          };

        enviaPedido( pedidoObj );
        enviaPedidoDB( pedidoObj )
            .then(() => {

                Swal.fire(
                    '¡Gracias!',
                    'Tu pedido ha sido enviado',
                    'success'
                  );
        
                navigate('/confirma');

            }).catch((err) => {
                console.log(err)
            });

    }
    
    const precioTotal = actualizadorLista( seleccion );

    return (

        <>

            <div id="cont-seleccion" className='container-fluid m-2'>

                    <h2 id="foco-listado" className="text-center m-3">Productos seleccionados:</h2>

                        { seleccion.map( producto => (

                                            <ProductoSeleccionado
                                                key={producto.id}
                                                producto={producto}
                                            />
                        ) )} 

                    <p className='d-flex justify-content-center m-3'>Total: &nbsp; <b>{precioTotal}€</b></p>

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
                                                autoFocus={true}
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
