import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ConfirmaEnvio from '../components/ConfirmaEnvio'
import Listado from '../components/Listado'
import MenuLogin from '../components/MenuLogin'
import Seleccion from '../components/Seleccion'


const DashBoard = () => {
    
    return (
        <>

            <MenuLogin />

            <div className='container'>

                <Routes>
                    
                    <Route path='confirma' element={<ConfirmaEnvio />}/>
                    <Route path='filtered' element={<Listado />}/>
                    <Route path='seleccion' element={<Seleccion />}/>
                    <Route path='/*' element={<Listado />}/>

                </Routes>
                
            </div>
    
        </>
    )
}

export default DashBoard
