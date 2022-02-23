// import moment from 'moment';
import React from 'react';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { incluyePedido } from '../actions/enviaPedidoActions';
import { inicializaListado } from '../actions/listadosActions';
// import { uniqueId } from '../helpers/creaIdAleatorio';


const ConfirmaEnvio = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {

    dispatch( inicializaListado( ) );
    navigate('/');

}

  return (
    <>
      
      <div className='d-flex justify-content-around m-5'>

        {/* {pedido.map( pedidos => (
          <p>{pedidos.nombre}</p>
        ))} */}
          
        <button 
          className='btn btn-secondary btn-sm'
          onClick={ handleClick }>
          Nuevo pedido
        </button>
      </div>
    </>
    
  )
}

export default ConfirmaEnvio




