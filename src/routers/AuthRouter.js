import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginScreen from '../auth/LoginScreen'
import RegisterScreen from '../auth/RegisterScreen'


const AuthRouter = () => {

  let isAdmin = false;

  const { uid } = useSelector( state => state.auth );

  if( uid === 'mHDUnKJe98OtEBYi4siKY43VoEq2' ){
    isAdmin = true;
  } else {
    isAdmin = false;
  };

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