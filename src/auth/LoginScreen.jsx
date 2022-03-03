import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import { useForm } from '../hooks/useForm';
import { removeError, setError } from '../actions/ui';
import { startLoginEmailPassword, startGoogleLogin } from '../actions/auth';

const LoginScreen = () => {

  
  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui );
  const { msgError } = useSelector( state => state.ui );

  const [ formValues, handleInputChange ] = useForm({
    email: 'cliente@mrchava.com',
    password: '123456'
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    if ( isFormValid() ) {
      dispatch( startLoginEmailPassword(email , password));
    }

  };

  const handleGoogleLogin = () => {

    dispatch( startGoogleLogin() );
  }

  const isFormValid = () => {

    if(password.trim().length === 0 ) {
      dispatch( setError('introduce tu contraseña'));
      return false;
    } else if( !isEmail(email)) {

      dispatch( setError('introduce un email existente'));
      return false;
    };

    dispatch( removeError());
    return true;
  }

  return (
    <>
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

          <input
            type='text'
            placeholder='email'
            name='email'
            className='auth__input'
            autoComplete='off'
            value={ email}
            onChange={ handleInputChange }
          />

          <input
            type='password'
            placeholder='contraseña'
            name='password'
            className='auth__input'
            value={ password }
            onChange={ handleInputChange }
          />
          
            <button
              type='submit'
              className='btn btn-primary btn-block'
              disabled={loading}
            > 
            Entrar
          </button>
          
          <hr />
          <div className='auth__social-networks'>
            <p>Entrar con redes sociales:</p>
            <div 
              className="google-btn"
              onClick={ handleGoogleLogin }
            >
              <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                </div>
                <p className="btn-text">
                <b>Entrar con Google</b>
                </p>
              </div>
          </div>

            <Link to='/auth/register'
                  className='enlace'>
              Crear cuenta nueva
            </Link>
            
        </form>
    </>
  )
}

export default LoginScreen