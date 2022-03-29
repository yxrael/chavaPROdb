import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import { useDispatch } from 'react-redux';
import { modificaProducto, nuevoProductoLista } from '../../actions/listadosActions';
import { calculaMaximoNumeroProducto } from '../../helpers/calculaMaximoNumeroProducto';
import { actualizaListadoDB } from '../../helpers/actualizadorDBAdmin';
import { store } from '../../store/store';
import { removeError, setError } from '../../actions/ui';
import { subeImagenDetalles } from '../../helpers/gestionCloudinary';

const NuevoProducto = ( {setNuevoItem, modoEdicion, setModoEdicion, cafeEdicion } ) => {

    const dispatch = useDispatch();
    const { msgError } = useSelector( state => state.ui );
    const listado = useSelector( state => state.listado );

    let rutaIMAGENAwait = '';
    const [ rutaImagen, setRutaImagen ] = useState(['','']);
    // let fileName = '';
    let preRelleno = {};

    // chava-pro
    // https://api.cloudinary.com/v1_1/dtm3z7jee/upload
    // https://<API_KEY>:<API_SECRET>@api.cloudinary.com/v1_1/<CLOUD_NAME>/upload

    if(modoEdicion !== '' ) {
        preRelleno = {
            pais: cafeEdicion.pais,
            nombre: cafeEdicion.nombre,
            continente: cafeEdicion.continente,
            precio: cafeEdicion.precio,
            proceso: cafeEdicion.proceso,
            descafeinado: cafeEdicion.descafeinado,
            infoExtra: cafeEdicion.infoExtra,
            tipoCliente: cafeEdicion.tipoCliente,
            rutaFile: ''
        }; 

    } else {
            preRelleno = {
                pais: '',
                nombre: '',
                continente: '',
                precio: 0,
                proceso: '',
                descafeinado: false,
                infoExtra: '',
                tipoCliente: '',
                rutaFile: '',
                }
        }

    // useEffect(() => {
    //     if(cafeEdicion.rutaURL !== '' ){
    //         setRutaImagen([cafeEdicion.rutaURL, cafeEdicion.fileName]);
    //     }
    // }, [])
    
    const [ formValues, handleInputChange, descafeinadoChange ] = useForm( preRelleno );

    const { pais, nombre, continente, precio, proceso, descafeinado, infoExtra, tipoCliente, rutaFile } = formValues;

    const handleSend = (e) => {
        e.preventDefault();

        let id = '';

        if( isFormValid ) {

            let nuevoCafe = {};

            // sube la imagen a cloud y devuelve la url
            // subeImagenDetalles( resumenURL );

            // mete la url de la imagen en resumenURL

            if(modoEdicion !== ''){

                // const enlace = await subeImagenDetalles( resumenURL, cafeEdicion.id, nombre );

                if( rutaImagen[0] === '' ){
                    console.log('antes de comprobar:', rutaImagen[0]);
                    setRutaImagen([cafeEdicion.rutaURL, cafeEdicion.fileName]);
                    console.log('despues de reasignar', rutaImagen);
                }

                nuevoCafe = {
                    id: cafeEdicion.id,
                    pais,
                    nombre,
                    continente,
                    precio,
                    proceso,
                    disponible: cafeEdicion.disponible,
                    descafeinado,
                    infoExtra,
                    tipoCliente,
                    rutaURL: rutaImagen[0],
                    fileName: rutaImagen[1],
                    cantidad: 0
                };

                dispatch( modificaProducto( cafeEdicion.id, nuevoCafe ));
        
            } else {
        
                id = calculaMaximoNumeroProducto( listado );

                // if( cafeEdicion.rutaURL) {
                //     setRutaImagen(subeImagenDetalles( cafeEdicion.rutaURL ));
                //     console.log( rutaImagen );
                // } else {
                //     setRutaImagen(['','']);
                // }



                nuevoCafe = {
                    id,
                    pais,
                    nombre,
                    continente,
                    precio,
                    proceso,
                    disponible: true,
                    descafeinado,
                    infoExtra,
                    tipoCliente,
                    rutaURL: rutaImagen[0],
                    fileName: rutaImagen[1],
                    cantidad: 0
                };

                dispatch( nuevoProductoLista( nuevoCafe ));
            };

            // const actual = store.getState();
            actualizaListadoDB( nuevoCafe );

        } 
        
        setModoEdicion('');
        setNuevoItem(false);
    }

    const handleCancel = () => {
        
        setModoEdicion('');
        setNuevoItem(false);
    }

    const isFormValid = () => {

        if( pais !== '' && nombre !== '' && continente !== '' && precio !== 0 && proceso !== '' && tipoCliente !=='' ){
            dispatch( removeError());
             return true
        }
        dispatch( setError('todos los campos deben estar rellenos'));
        return false;
    }

    const handleInputFile = async (e) => {

        handleInputChange( e );
        const file = e.target.files[0];

        if(file){

            rutaIMAGENAwait = await subeImagenDetalles( file );
            setRutaImagen(rutaIMAGENAwait);
        }
    }

    const handleInputSelector = (e) => {
        e.preventDefault();

        descafeinadoChange( e.target.checked );
    }

  return (

    <div 
        className='modal'>

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
                                autoFocus={true}
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

                                <div>
                                    <label htmlFor='continente'>Continente:</label>
                                    <select name='continente'
                                        className='custom-select form-control'
                                        // value={ password2 }
                                        onChange={ handleInputChange } >
                                        <option defaultValue={ continente }>{ continente }</option>
                                        <option value='AMERICA'>América</option>
                                        <option value='AFRICA'>África</option>
                                        <option value='ASIA'>Asia</option>
                                        <option value='DESCAFEINADO'>*descafeinado*</option>
                                    </select>
                                </div>
                                    
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

                                {/* <label htmlFor='continente'>Continente:</label>
                                <input
                                    type='text'
                                    placeholder='continente'
                                    name='continente'
                                    className='form-control'
                                    autoComplete='off'
                                    value={ continente }
                                    id='continente'
                                    onChange={ handleInputChange }
                                /> */}
                                

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
                                <div>
                                    <label htmlFor='tipoCliente'>Tarifa:</label>
                                    <select name='tipoCliente'
                                        className='custom-select form-control'
                                        // value={ password2 }
                                        onChange={ handleInputChange } >
                                        <option defaultValue={ tipoCliente }>{ tipoCliente }</option>
                                        <option value='tostado'>Tostado</option>
                                        <option value='verde'>Verde</option>
                                    </select>
                                </div>



                                {/* {
                                   ( modoEdicion === '') 
                                    &&
                                    (
                                        <div>
                                            <label htmlFor='rutaFile'>Gráfica resumen:</label>
                                            <input
                                                type='file'
                                                placeholder='resumen'
                                                name='rutaFile'
                                                className='form-control'
                                                autoComplete='off'
                                                value={ rutaFile }
                                                id='rutaFile'
                                                onChange={ handleInputFile }
                                            />
                                        </div>

                                    )
                                    
                                } */}

                                        <div>
                                            <label htmlFor='rutaFile'>Gráfica resumen:</label>
                                            <input
                                                type='file'
                                                placeholder='resumen'
                                                name='rutaFile'
                                                className='form-control'
                                                autoComplete='off'
                                                value={ rutaFile }
                                                id='rutaFile'
                                                onChange={ handleInputFile }
                                            />
                                        </div>
                                
                                

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
                                    checked={descafeinado}
                                    onChange={ handleInputSelector }
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