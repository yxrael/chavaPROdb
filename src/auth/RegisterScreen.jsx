import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';
import isEmail from 'validator/lib/isEmail';
import { useDispatch } from 'react-redux';
import { removeError, setError } from '../actions/ui';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { startRegisterWithEmailPasswordName } from '../actions/auth';

const RegisterScreen = ( {setVista} ) => {

  const dispatch = useDispatch();
  const { msgError } = useSelector( state => state.ui );

  const navigate = useNavigate();

  useEffect(() => {
    setVista('registro');
  }, [ setVista ]);

  const [ formValues, handleInputChange ] = useForm({
    name: '',
    establecimiento: '',
    email: '',
    password: '',
    password2: '',
    tipoCliente: ''
  });

  const { name, establecimiento,  email, password, password2, tipoCliente } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if( isFormValid() ){

      dispatch(startRegisterWithEmailPasswordName( name, establecimiento, email, password, tipoCliente ));
      // startRegisterWithEmailPasswordNameAdmin( name, establecimiento, email, password );
      navigate('/register');
    }

  }

  const isFormValid = () => {

    if(name.trim().length === 0 ) {
      dispatch( setError('introduce el nombre'));
      return false;
    } else if(establecimiento.trim().length === 0 ) {
      dispatch( setError('introduce el establecimiento'));
      return false
    } else if( !isEmail(email)) {

      dispatch( setError('introduce el email'));
      return false;
    } else if( password !== password2 || password < 5) {

      dispatch( setError('las contraseñas deben coincidir y ser mayor de 6 caractéres'));
      return false;
    } else if( tipoCliente === 'Tipo cliente' || tipoCliente === '') {
      dispatch( setError('selecciona el tipo de cliente'));
      return false;
    }
    dispatch( removeError());
    return true;
  }

  return (
    <div className='container d-flex justify-content-center'>
      <div className='container-fluid card m-5 p-5 w-50'>
    
          {/* <img src="../images/logo.png" alt="logo Mr Chava" className='img-fluid mb-3'></img> */}

          <form onSubmit={ handleRegister }>

            {
              (msgError) 
                &&  (<div className='auth__alert-error'>
                        { msgError }
                    </div>)
            }
            
            <input
              type='text'
              placeholder='nombre'
              name='name'
              className='auth__input'
              autoComplete='off'
              value={ name }
              onChange={ handleInputChange }
            />

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
              placeholder='confirma contraseña'
              name='password2'
              className='auth__input'
              value={ password2 }
              onChange={ handleInputChange }
            />

            <select name='tipoCliente'
              className='custom-select mt-2'
              // value={ password2 }
              onChange={ handleInputChange } >
              <option defaultValue='Tipo cliente'>Tipo cliente</option>
              <option value='tostado'>Tostado</option>
              <option value='verde'>Verde</option>
              <option value='admin'>Administrador</option>
            </select>
            
            <div>
              <button
                  type='submit'
                  className='btn btn-primary btn-block mt-3'
                  // disabled={true}
                >
                Registrar usuario
              </button>
            </div>
              
            

            {/* <hr /> */}
            

              {/* <Link to='/auth/login'
                    className='enlace'>
                ¿Ya estás registrado?
              </Link> */}
        


          </form>
      </div>
    </div>
  )
}

export default RegisterScreen