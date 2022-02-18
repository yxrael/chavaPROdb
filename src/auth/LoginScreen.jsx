import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { login } from '../actions/auth';
// import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../hooks/useForm';




const LoginScreen = () => {


  // const dispatch = useDispatch();
  // // const { loading } = useSelector( state => state.ui );

  // const [ formValues, handleInputChange ] = useForm({
  //   email: 'mrchava@mrchava.com',
  //   password: '123456'
  // });

  // const { email, password } = formValues;

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   dispatch( login(12345, 'Chava'));
  // }

  return (
    <>
        <h3 className='auth__title'>Entrar</h3>

        <form
          // onSubmit={ handleLogin }
        >

          <input
            type='text'
            placeholder='email'
            name='email'
            className='auth__input'
            autoComplete='off'
            // value={ email}
            // onChange={ handleInputChange }
          />

          <input
            type='password'
            placeholder='contraseña'
            name='password'
            className='auth__input'
            // value={ password }
            // onChange={ handleInputChange }
          />
          
            <button
              type='submit'
              className='btn btn-primary btn-block'
              // disabled={true}
            >
          
          
            Entrar
          </button>
          

          <hr />
          <div className='auth__social-networks'>
            <p>Entrar con redes sociales:</p>
            <div 
              className="google-btn"
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