import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../hooks/useForm';
import isEmail from 'validator/lib/isEmail';
import { useDispatch } from 'react-redux';
import { removeError, setError } from '../actions/ui';
import { useSelector } from 'react-redux';
import { startRegisterWithEmailPasswordName } from '../actions/auth';


const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui );

  const [ formValues, handleInputChange ] = useForm({
    name: 'Hernando',
    establecimiento: 'Cafetería López',
    email: 'nando@gmail.com',
    password: '123456',
    password2: '123456'
  });

  const { name, establecimiento,  email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if( isFormValid() ){

      dispatch(startRegisterWithEmailPasswordName( name, establecimiento, email, password ));
    }

  }

  const isFormValid = () => {

    if(name.trim().length === 0 ) {
      dispatch( setError('introduce tu nombre'));
      return false;
    } else if( !isEmail(email)) {

      dispatch( setError('introduce tu email'));
      return false;
    } else if( password !== password2 || password < 5) {

      dispatch( setError('las contraseñas deben coincidir y ser mayor de 6 caractéres'));
      return false;
    }
    dispatch( removeError());
    return true;
  }

  return (
    <>
        {/* <h3 className='auth__title'>Registrarse</h3> */}
        <img src="../images/logo.jpg" alt="logo Mr Chava" className='img-fluid mb-3'></img>

        <form onSubmit={ handleRegister }>

          {
             (msgError) 
              &&  (<div className='auth__alert-error'>
                      { msgError }
                  </div>)
          }
          
           

          <input
            type='text'
            placeholder='establecimiento'
            name='establecimiento'
            className='auth__input'
            autoComplete='off'
            value={ establecimiento }
            onChange={ handleInputChange }
          />

          <input
            type='text'
            placeholder='email'
            name='email'
            className='auth__input'
            autoComplete='off'
            value={ email }
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

          <input
            type='password'
            placeholder='confirma constraseña'
            name='password2'
            className='auth__input'
            value={ password2 }
            onChange={ handleInputChange }
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