import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import ProductoStockAdmin from './ProductoStockAdmin';
import NuevoProducto from './NuevoProducto';
import { filtraPorTipoClienteAdmin } from '../../helpers/cargaListado';

const ListadoAdmin = ( { setVista }) => {

  const [nuevoItem, setNuevoItem] = useState(false);
  const [modoEdicion, setModoEdicion] = useState('');
  const [cafeEdicion, setCafeEdicion] = useState({});
  const [filtroCliente, setFiltroCliente] = useState('verde');

  const { listado } = useSelector( state => state );
  const  [listadoFiltrado, setListadoFiltrado] = useState(listado);

  useEffect( () => {

    setListadoFiltrado(filtraPorTipoClienteAdmin( listado, filtroCliente ));

  }, [ setListadoFiltrado, listado, filtroCliente ]);


  useEffect(() => {
    setVista('productos');
  }, [ setVista ]);

  const handleClickTostado = () => {
    setFiltroCliente('tostado');    
  };
  const handleClickVerde = () => {
    setFiltroCliente('verde');
  };

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
                    
                </div>


                <div 
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

                    </div>
                    

                </div>

                </div>
            )

        }
        
    </>
  )
}

export default ListadoAdmin


