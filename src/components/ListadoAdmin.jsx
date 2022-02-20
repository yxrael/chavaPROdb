import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filtrarSeleccion } from '../actions/seleccionActions';
import { localStorageUpdater } from '../helpers/localStorageUpdater';
import { store } from '../store/store';
import ProductoAdmin from './ProductoAdmin';


const ListadoAdmin = () => {

  const dispatch = useDispatch();
  
  const navigate = useNavigate();

  const { listado } = useSelector( state => state );


  // const handleSubmit = (e) => {
  //     e.preventDefault();

  //     dispatch( filtrarSeleccion( listado ));

  //     const {seleccion} = store.getState();

  //     localStorageUpdater( seleccion );
     
  //     navigate('/seleccion');
  // };


  return (

      <section id="cont-listado" className='container-fluid m-2'>

      <form 
          // onSubmit={ handleSubmit }
          className="contenido primario">

          <h2 id="foco-listado" className="text-center m-3">Listado productos:</h2>

          {listado.map( producto => {
                  return (
                      <ProductoAdmin
                          key={producto.id}
                          producto={producto}
                      />
                  )
              })
          }

          <div className='d-flex justify-content-center m-3'>

              {/* <button 
                  className='btn btn-primary '>
                  Enviar
              </button> */}
          </div>
          

      </form>
      </section>
  )
}

export default ListadoAdmin