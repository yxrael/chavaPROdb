import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { inicializaListado } from '../actions/listadosActions';

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




