import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import ConfirmaEnvio from '../components/ConfirmaEnvio'
import Listado from '../components/Listado'
import ListadoAdmin from '../components/panelAdmin/ListadoAdmin'
import MenuLogin from '../components/MenuLogin'
import Seleccion from '../components/Seleccion';
import AdministradorPedidos from '../components/panelAdmin/AdministradorPedidos';
import BotonesAdmin from '../components/panelAdmin/BotonesAdmin'
import { useDispatch } from 'react-redux';
import { cargaPedidosSinDispatch } from '../helpers/cargaPedidos'
import moment from 'moment';

import ListadoPedidosCliente from '../components/ListadoPedidosCliente'
import { cargaListadosinDispatch } from '../helpers/cargaListado'
import { cargaListaPedidos } from '../actions/listaPedidosAdmin'
import { cargaListaInicio } from '../actions/listadosActions'
import RegisterScreen from '../auth/RegisterScreen'
import { muestraError } from '../helpers/muestraError'

const DashBoard = () => {

    let isAdmin = false;

    const { tipoCliente } = useSelector( state => state.auth );
    const [ vista, setVista ] = useState ('');
    const [ toggleEstado, setToggleEstado ] = useState(false);
    
    const date = moment( new Date() ).format('YYYY-MM-DD');
    // const inicioDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
    const inicioDate = '2022-01-01';
    
    const [ fechasFiltrado, setFechasFiltrado ] = useState( [ inicioDate, date]);

    // if( uid === 'Qmop2uO3UXZxPKTiYrYW0pcIHYO2' ){
    if( tipoCliente === 'admin' ){
        isAdmin = true;

    } else {
        isAdmin = false;
    };

    const dispatch = useDispatch();

    cargaPedidosSinDispatch()
      .then((listado) => {
        dispatch( cargaListaPedidos(listado) );
      }).catch((err) => {
        muestraError( 'Error cargando el listado de pedidos', 'Contacta con soporte@mrchava.es' );
        console.log(err)
      });
    // cargaPedidos( dispatch );

    cargaListadosinDispatch()
    .then((listado) => {
        dispatch( cargaListaInicio(listado) );
      }).catch((err) => {
        muestraError( 'Error cargando el listado de productos', 'Contacta con soporte@mrchava.es' );
        console.log(err)
      });
    // cargaListado( dispatch );
    
    return (
        <>
            {
                isAdmin
                ?
                (
                    <>

                <MenuLogin />
                <BotonesAdmin
                    vista={vista}
                    setVista={setVista}
                    fechasFiltrado={fechasFiltrado}
                    setFechasFiltrado={setFechasFiltrado}
                    toggleEstado={toggleEstado}
                    setToggleEstado={setToggleEstado}
                />

                <div className='container'>

                    <Routes>
                        
                        <Route path='pedidos' element={<AdministradorPedidos
                            vista={vista}
                            setVista={setVista}
                            fechasFiltrado={fechasFiltrado}
                            setFechasFiltrado={setFechasFiltrado}
                            toggleEstado={toggleEstado}
                            setToggleEstado={setToggleEstado}
                        />}/>
                        <Route path='administrar' element={<ListadoAdmin
                            vista={vista}
                            setVista={setVista}
                        />}/>
                        <Route path='register'
                        element={<RegisterScreen
                            vista={vista}
                            setVista={setVista}                        
                        />} />
                        <Route path='/*' element={<AdministradorPedidos
                            vista={vista}
                            setVista={setVista}
                            fechasFiltrado={fechasFiltrado}
                            setFechasFiltrado={setFechasFiltrado}
                            toggleEstado={toggleEstado}
                            setToggleEstado={setToggleEstado}
                        />}/>

                    </Routes>
                    
                </div>
        
            </>
                )
                :
                (
                    <>

                    <MenuLogin />
        
                    <div className='container'>
        
                        <Routes>
                            
                            <Route path='confirma' element={<ConfirmaEnvio />}/>
                            <Route path='filtered' element={<Listado />}/>
                            <Route path='seleccion' element={<Seleccion />}/>
                            <Route path='mispedidos' element={<ListadoPedidosCliente />}/>
                            <Route path='/*' element={<Listado />}/>
        
                        </Routes>
                        
                    </div>
            
                </>
                )
            }
        </>


        
    )
}

export default DashBoard
