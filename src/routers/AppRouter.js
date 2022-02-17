import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ConfirmaEnvio from '../components/ConfirmaEnvio'
import ListadoFiltradoPais from '../components/filtrosPaises/ListadoFiltradoPais'
import Header from '../components/Header'
import Listado from '../components/Listado'
import Seleccion from '../components/Seleccion'


const AppRouter = () => {

    return (
        <BrowserRouter>

            <Header />

            <Routes>

                    <Route path='/confirma' element={<ConfirmaEnvio 
                    />} />

                    <Route path='/seleccion' element={<Seleccion 
                    />} />

                    <Route path='/filtered' element={<Listado 
                    />}/>
                    
                    <Route path='/' element={<Listado  
                    />} />

            </Routes>
            
        </BrowserRouter>
    )
}

export default AppRouter


{/* <DashBoard 
listaCafes={listaCafes}
listadoSeleccion={listadoSeleccion}
setListadoSeleccion={setListadoSeleccion}  
/> */}