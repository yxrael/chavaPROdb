import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import { useForm } from '../hooks/useForm';
import { removeError, setError } from '../actions/ui';
import { startLoginEmailPassword } from '../actions/auth';

const LoginScreen = () => {
  
  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui );
  const { msgError } = useSelector( state => state.ui );

  const [ formValues, handleInputChange ] = useForm({
    email: '',
    password: ''
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    if ( isFormValid() ) {

      // buscar en BD por uid y añadir tipo de cliente
      dispatch( startLoginEmailPassword( email.trim().toLowerCase() , password.trim() ));
    }

  };

  // const handleGoogleLogin = () => {

  //   dispatch( startGoogleLogin() );
  // }

  const isFormValid = () => {

    if(password.trim().length === 0 ) {
      dispatch( setError('introduce tu contraseña'));
      return false;
    } else if( !isEmail( email.trim() ) ) {

      dispatch( setError('introduce un email existente'));
      return false;
    };

    dispatch( removeError());
    return true;
  }

  return (
    <div className='auth_anchoMax'>
      <div className='container card mt-5 mb-5 p-4'> 
        <img src="../images/logo.png" alt="logo Mr Chava" className='img-fluid mb-3'></img>

        {
             (msgError) 
              &&  (<div className='auth__alert-error'>
                      { msgError }
                  </div>)
          }

        <form
          onSubmit={ handleLogin }
        >
          <div className='form-group mb-3'>
            <label htmlFor='email'>email:</label>
              <input
                type='text'
                placeholder='email'
                name='email'
                className='form-control mt-2'
                autoComplete='off'
                value={ email }
                onChange={ handleInputChange }
              />
          </div>

          <div className='form-group mb-2'>
            <label htmlFor='password'>contraseña:</label>
              <input
                type='password'
                placeholder='contraseña'
                name='password'
                className='form-control mt-2'
                value={ password }
                onChange={ handleInputChange }
              />
          </div>
          
            <button
              type='submit'
              className='btn btn-primary btn-block m-2'
              disabled={loading}
            > 
            Entrar
          </button>
          
          <hr />

            <p><b>Solicita tu cuenta:</b></p>
            <p>mrchavamicrotostador@gmail.com</p>
            
        </form>
      </div>
    </div>
  )
}

export default LoginScreen

