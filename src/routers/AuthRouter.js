import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginScreen from '../auth/LoginScreen'
import RegisterScreen from '../auth/RegisterScreen'

const AuthRouter = () => {
  return (
    <div className='auth__main'>
        <div className='auth__box-container'>
        
            <Routes >

                <Route path='register'
                        element={<RegisterScreen />} />
                <Route path='login'
                        element={<LoginScreen />} />
                <Route path='/*'
                    element={<Navigate to='/' />} />

            </Routes>

        </div>
    </div>
  )
}

export default AuthRouter