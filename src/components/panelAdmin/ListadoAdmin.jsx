import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductoStockAdmin from './ProductoStockAdmin';
import NuevoProducto from './NuevoProducto';
// import Swal from 'sweetalert2';


const ListadoAdmin = ( {vista, setVista }) => {

  const [nuevoItem, setNuevoItem] = useState(false);
  const [modoEdicion, setModoEdicion] = useState('');
  const [cafeEdicion, setCafeEdicion] = useState({});

  const { listado } = useSelector( state => state );

  useEffect(() => {
    setVista('productos');
  }, [ setVista ]);
  

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
                    className='btn btn-success btn-sm m-2'
                    onClick={ abreVentana }
                    >
                        Nuevo Producto
                </button>
                </div>


                <div 
                    // onSubmit={ handleSubmit }
                    className="contenido primario">

                    <h2 id="foco-listado" className="text-center m-3">Listado productos:</h2>

                    {listado.map( producto => {
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


