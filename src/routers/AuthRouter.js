import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginScreen from '../auth/LoginScreen'

const AuthRouter = () => {

  return (
    // <div className='container-fluid'>
        <div className='mxwListados'>
        
            <Routes >
                
                <Route path='login'
                        element={<LoginScreen />} />
                <Route path='/*'
                    element={<Navigate to='/' />} />

            </Routes>

        </div>
    // </div>
  )
}

export default AuthRouter