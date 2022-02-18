import React from 'react'
import { Route, Routes } from "react-router-dom"

import Header from '../components/Header'
import AuthRouter from './AuthRouter'
import DashBoard from './DashBoard'

const AppRouter = () => {

    return (

        <>
        <Header />

        <Routes>
            
        <Route path='/auth/*' element={<AuthRouter />}/>


        <Route path='/*'
            element={<DashBoard />} />
 
        </Routes>
        </>
            
    )
}

export default AppRouter
