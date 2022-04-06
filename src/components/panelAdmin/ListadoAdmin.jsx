import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductoStockAdmin from './ProductoStockAdmin';
import NuevoProducto from './NuevoProducto';
import { cargaListadosinDispatchTipoCliente, filtraPorTipoClienteAdmin } from '../../helpers/cargaListado';
import { cargaListaInicio } from '../../actions/listadosActions';

// import { trasladaProductos } from '../../helpers/cargaListado';
// import Swal from 'sweetalert2';

const ListadoAdmin = ( { setVista }) => {

  const [nuevoItem, setNuevoItem] = useState(false);
  const [modoEdicion, setModoEdicion] = useState('');
  const [cafeEdicion, setCafeEdicion] = useState({});
  const [filtroCliente, setFiltroCliente] = useState('verde');
   
  const dispatch = useDispatch();

  const { listado } = useSelector( state => state );
  const  [listadoFiltrado, setListadoFiltrado] = useState(listado);

//   useEffect( () => {

//   }, []);

//   useEffect(() => {
//     cargaListadosinDispatchTipoCliente(filtroCliente)
//     .then((listadoActual) => {
//         dispatch( cargaListaInicio(listadoActual) );
//       }).catch((err) => {
//         console.log(err)
//       });
//   }, [listado])

  useEffect( () => {

    setListadoFiltrado(filtraPorTipoClienteAdmin( listado, filtroCliente ));

  }, [ setListadoFiltrado, filtroCliente ]);


  useEffect(() => {
    setVista('productos');
  }, [ setVista ]);

  const handleClickTostado = () => {
    setFiltroCliente('tostado');    
  };
  const handleClickVerde = () => {
    setFiltroCliente('verde');
  };

//   const guardarCambios = (e) => {
//     e.preventDefault();

//     Swal.fire({
//         icon: 'success',
//         title: 'Cambios guardados',
//         showConfirmButton: false,
//         timer: 1000
//       })

//     actualizaListadoDB( listado );
//   }

  const abreVentana = () => {
      setNuevoItem(true);
  }

//   const traslado = (e) => {
//     e.preventDefault();

//     trasladaProductos();
//   }

  return (

    <>
        
        { 
            nuevoItem
            ?
            (
                <div id="cont-listado" className='container-fluid m-2'>

                    <NuevoProducto
                        setNuevoItem={setNuevoItem}
                        modoEdicion={modoEdicion}
                        setModoEdicion={setModoEdicion}
                        cafeEdicion={cafeEdicion}
                        setCafeEdicion={setCafeEdicion}
                    />
                </div>
            )
            :
            (
                <div id="cont-listado" className='container-fluid m-2'>

                <div className='d-flex justify-content-center'>
                <button 
                    className='btn btn-info btn-sm m-3'
                    onClick={ abreVentana }
                    >
                        Nuevo Producto
                </button>
                
                {
                    (filtroCliente === 'tostado')
                    ?
                    <button
                    className='btn btn-success btn-sm m-3'
                    onClick={ handleClickTostado }
                    >
                        Tostado
                    </button>
                    :
                    <button
                    className='btn btn-secondary btn-sm m-3'
                    onClick={ handleClickTostado }
                    >
                        Tostado
                    </button>
                }
                {
                    (filtroCliente === 'verde')
                    ?
                    <button
                    className='btn btn-success btn-sm m-3'
                    onClick={ handleClickVerde }
                    >
                        Verde
                    </button>
                    :
                    <button
                    className='btn btn-secondary btn-sm m-3'
                    onClick={ handleClickVerde }
                    >
                        Verde
                    </button>
                }
                    
                    
    
                {/* <button 
                    className='btn btn-success btn-sm mt-4'
                    onClick={ traslado }
                    >
                        TRASLADAR
                </button> */}
                </div>


                <div 
                    // onSubmit={ handleSubmit }
                    className="contenido primario">

                    <h2 id="foco-listado" className="text-center m-3">Listado productos:</h2>

                    {listadoFiltrado.map( producto => {
                            return (
                                <ProductoStockAdmin
                                    key={producto.id}
                                    producto={producto}
                                    setNuevoItem={setNuevoItem}
                                    modoEdicion={modoEdicion}
                                    setModoEdicion={setModoEdicion}
                                    setCafeEdicion={setCafeEdicion}
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

                {/* <div className='d-flex justify-content-center'>
                <button 
                    className='btn btn-success btn-sm m-2'
                    onClick={ guardarCambios }
                    >
                        Guardar cambios
                </button>
                </div> */}


                </div>
            )


        }
          

      

    </>
  )
}

export default ListadoAdmin


