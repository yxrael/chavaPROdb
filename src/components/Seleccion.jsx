import { useNavigate } from 'react-router-dom';
import { actualizadorLista } from '../helpers/actualizadorLista';
import ProductoSeleccionado from './ProductoSeleccionado';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const Seleccion = () => {

    const navigate = useNavigate();

    const { seleccion } = useSelector( state => state );

    const handleClick = () => {
        navigate( -1 );
    }

    const enviarPedido = () => {
 
        Swal.fire(
            '¡Gracias!',
            'Tu pedido ha sido enviado',
            'success'
          );

        navigate('/confirma');
    }

    // const tempo = JSON.parse(localStorage.getItem('listadoCafes') );
    
    const precioTotal = actualizadorLista( seleccion );

    return (

        <div id="cont-seleccion" className='container-fluid m-2'>

                <h2 id="foco-listado" className="text-center m-3">Productos seleccionados:</h2>

                    { seleccion.map( producto => (

                                        <ProductoSeleccionado
                                            key={producto.id}
                                            producto={producto}

                                        />
                    ) )} 

                <p className='d-flex justify-content-center m-3'>Total: &nbsp; <b>{precioTotal}€/kg</b></p>

                    {
                        (seleccion.length === 0)
                            && (
                                <div className='d-flex justify-content-around m-5'>
                                    <p>No tienes ningún producto seleccionado</p>
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

    )

}

export default Seleccion
