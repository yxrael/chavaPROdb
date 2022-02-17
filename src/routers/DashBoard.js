import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ConfirmaEnvio from '../components/ConfirmaEnvio'
import Header from '../components/Header'
import Listado from '../components/Listado'
import Seleccion from '../components/Seleccion'

const DashBoard = () => {
    
    return (
        <>
            <Header />

            <div className='container'>

                <Routes>

                    <Route path='/' element={<Listado />}/>
                    <Route path='/confirma' element={<ConfirmaEnvio />}/>
                    <Route path='/filtered' element={<Listado />}/>
                    <Route path='/seleccion' element={<Seleccion />}/>

                </Routes>
                
            </div>
    
        </>
    )
}

export default DashBoard
