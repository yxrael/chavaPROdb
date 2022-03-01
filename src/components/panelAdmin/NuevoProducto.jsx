


import React from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux';
import { nuevoProductoLista } from '../../actions/listadosActions';
import { calculaMaximoNumeroProducto } from '../../helpers/calculaMaximoNumeroProducto';
import { actualizaListadoDB } from '../../helpers/actualizadorDBAdmin';
import { store } from '../../store/store';
import { removeError, setError } from '../../actions/ui';


const NuevoProducto = ( {setNuevoItem} ) => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );
    const listado = useSelector( state => state.listado );

   
    

    const [ formValues, handleInputChange ] = useForm({
        pais: '',
        nombre: '',
        continente: '',
        precio: 0,
        proceso: '',
        descafeinado: false,
        infoExtra: ''
    });

    const { pais, nombre, continente, precio, proceso, descafeinado, infoExtra } = formValues;

    const handleSend = (e) => {
        e.preventDefault();

        if( isFormValid ) {

            setNuevoItem(false);
            const id = calculaMaximoNumeroProducto( listado );
    
            const nuevoCafe = {
                id,
                pais,
                nombre,
                continente,
                precio,
                proceso,
                disponible: true,
                descafeinado,
                infoExtra,
                cantidad: 0
            };
    
            dispatch( nuevoProductoLista( nuevoCafe ));
    
            const actual = store.getState();
            actualizaListadoDB( actual. listado );
            // console.log( actual.listado );
            // incluyeProductoBD( nuevoCafe );
    
            // **********HACER DISPATCH Y ENVIO A BD ***********
        } 

        
    }

    const handleCancel = () => {

        // borrar datos del formulario ***********

        setNuevoItem(false);
    }

    const isFormValid = () => {

        if( pais !== '' && nombre !== '' && continente !== '' && precio !== 0 && proceso !== '' ){
            dispatch( removeError());
             return true
        }
        dispatch( setError('todos los campos deben estar rellenos'));
        return false;

    }

  return (

    <div 
        className=''>

        <div className='container card bg-light mt-5 mb-5 p-4 mxwListados'> 
            
                <form>

                        {
                            (msgError) 
                            &&  (<div className='auth__alert-error'>
                                    { msgError }
                                </div>)
                        }

                        <div className='form-group'>
                            <label htmlFor='nombre'>Nombre:</label>
                            <input
                                type='text'
                                placeholder='nombre'
                                name='nombre'
                                className='form-control'
                                autoComplete='off'
                                value={ nombre }
                                id='nombre'
                                autoFocus='true'
                                onChange={ handleInputChange }
                            />
                        </div>

                        <div className='form-group row'>

                            <div className='form-group col-md-6'>
                                <label htmlFor='pais'>País:</label>
                                <input
                                    type='text'
                                    placeholder='pais'
                                    name='pais'
                                    className='form-control'
                                    autoComplete='off'
                                    value={ pais }
                                    id='pais'
                                    onChange={ handleInputChange }
                                />
                                    
                                <label htmlFor='proceso'>Proceso:</label>
                                <input
                                    type='text'
                                    placeholder='proceso'
                                    name='proceso'
                                    className='form-control'
                                    autoComplete='off'
                                    value={ proceso }
                                    id='proceso'
                                    onChange={ handleInputChange }
                                />

                                
                            </div>


                            <div className='form-group col-md-6'>

                                <label htmlFor='continente'>Continente:</label>
                                <input
                                    type='text'
                                    placeholder='continente'
                                    name='continente'
                                    className='form-control'
                                    autoComplete='off'
                                    value={ continente }
                                    id='continente'
                                    onChange={ handleInputChange }
                                />

                                <label htmlFor='precio'>Precio:</label>
                                <input
                                    type='number'
                                    placeholder='precio'
                                    name='precio'
                                    className='form-control'
                                    autoComplete='off'
                                    value={ precio }
                                    id='precio'
                                    onChange={ handleInputChange }
                                />

                            </div>


                        </div>
                        
                        

                        <div className='form-group'>
                            <label htmlFor='matices'>Matices:</label>
                            <input
                                type='text-area'
                                placeholder='matices'
                                name='infoExtra'
                                className='form-control'
                                autoComplete='off'
                                value={ infoExtra }
                                id='matices'
                                onChange={ handleInputChange }
                            />
                        </div>

                        <div className='d-flex justify-content-between m-3'>

                            <div className="form-check mt-2 mb-2">
                                <input 
                                    className="form-check-input" 
                                    name='descafeinado'
                                    type="checkbox" 
                                    value={descafeinado} 
                                    id="descafeinado"
                                />
                                <label className="form-check-label" htmlFor="descafeinado">
                                    Descafeinado
                                </label>
                            </div>
                            <div>
                                <button 
                                    className='btn btn-warning m-2'
                                    onClick={ handleCancel }
                                    type='button'>
                                    Cancelar
                                </button>

                                <button 
                                    className='btn btn-primary '
                                    onClick={ handleSend }
                                    type='submit'>
                                    Guardar
                                </button>
                            </div>
                            
                        </div>

                    

                </form>

            



        </div>

    </div>


  )
}

export default NuevoProducto