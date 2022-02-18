import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
  return (
    <>
        <h3 className='auth__title'>Registrarse</h3>

        <form>

          <input
            type='text'
            placeholder='nombre'
            name='name'
            className='auth__input'
            autoComplete='off'
          />

          <input
            type='text'
            placeholder='email'
            name='email'
            className='auth__input'
            autoComplete='off'
          />

          <input
            type='password'
            placeholder='contraseña'
            name='password'
            className='auth__input'
          />

          <input
            type='password'
            placeholder='confirmar contraseña'
            name='password2'
            className='auth__input'
          />
          
            <button
              type='submit'
              className='btn btn-primary btn-block m-1'
              // disabled={true}
            >
          
          
            Registrar usuario
          </button>
          

          <hr />
          

            <Link to='/auth/login'
                  className='enlace'>
              ¿Ya estás registrado?
            </Link>
      


        </form>
    </>
  )
}

export default RegisterScreen