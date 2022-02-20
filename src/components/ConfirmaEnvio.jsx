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

  // const seleccion = useSelector( state => state.seleccion );
  // const { uid } = useSelector( state => state.auth );
  // const pedidos = useSelector( state => state.pedidos );
  // const pedidoId = uniqueId('p_');
  // // const date = new Date();
  // const date = moment( new Date() ).format('DD/MM/YYYY');  

  // const pedidoObj = {
  //   date,
  //   uid,
  //   pedidoId,
  //   seleccion
  // }

  const handleClick = () => {

    // dispatch( incluyePedido( pedidoObj ));
    // console.log( pedidos );

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




