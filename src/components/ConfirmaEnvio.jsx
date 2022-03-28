import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cargaListaInicio, inicializaListado } from '../actions/listadosActions';
import { cargaListadosinDispatch } from '../helpers/cargaListado';

const ConfirmaEnvio = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {

    // dispatch( inicializaListado( ) );

    cargaListadosinDispatch()
    .then((listado) => {
        dispatch( cargaListaInicio(listado) );
      }).catch((err) => {
        console.log(err)
      });

    navigate('/filtered');


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




