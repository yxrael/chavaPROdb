import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filtrarSeleccion } from '../../actions/seleccionActions';
import { localStorageUpdater } from '../../helpers/localStorageUpdater';
import { store } from '../../store/store';
import ProductoStockAdmin from './ProductoStockAdmin';
import { actualizaListadoDB } from '../../helpers/actualizadorDBAdmin';


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

  const guardarCambios = (e) => {
    e.preventDefault();

    console.log(listado);

    actualizaListadoDB( listado );

  }


  return (

      <div id="cont-listado" className='container-fluid m-2'>

      <div 
          // onSubmit={ handleSubmit }
          className="contenido primario">

          <h2 id="foco-listado" className="text-center m-3">Listado productos:</h2>

          {listado.map( producto => {
                  return (
                      <ProductoStockAdmin
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
          

      </div>

      <div className='d-flex justify-content-center'>
        <button 
            className='btn btn-success btn-sm m-2'
            onClick={ guardarCambios }
            >
                Guardar cambios
        </button>
      </div>

      
      </div>
  )
}

export default ListadoAdmin