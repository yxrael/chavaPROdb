import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import moment from 'moment';




const BotonesFiltradoPedidosAdmin = ( { fechasFiltrado, setFechasFiltrado }) => {

    const navigate = useNavigate();

    const dateActual = moment( new Date() ).format('DD/MM/YYYY');

    const iniciaFechas = {
        inicioFecha: fechasFiltrado[0],
        finFecha: fechasFiltrado[1]
    }
    const [ formValues, handleInputChange ] = useForm( iniciaFechas );
    const { inicioFecha, finFecha } = formValues;

    useEffect(() => {

        const date1 = moment( inicioFecha ).format('DD/MM/YYYY');
        const date2 = moment( finFecha ).format('DD/MM/YYYY');

        if(date1 < date2 && date1 < dateActual){
            navigate(`/pedidos?q=${ date1 }&q=${ date2 }`);
        }

    }, [ inicioFecha, finFecha]);
    
  return (
    <>
        <div className='container mxwListados justify-content-start'>

            
            <div className='form card bg-light mt-3 p-3 w-50'>

                <div className=''>
                    <div className='d-flex justify-content-start mt-2'>
                        {/* <button 
                            className='btn btn-secondary m-2 btn-sm boton-filtro-cafe'
                            // onClick={ handleClick }
                            value='AMERICA'>
                            FECHA INICIO
                        </button> */}
                        <label htmlFor='nombre'>Fecha inicio:</label>
                            <input
                                type='date'
                                placeholder='fecha inicio filtrado'
                                name='inicioFecha'
                                className='form-control'
                                autoComplete='off'
                                value={ inicioFecha }
                                id='inicioFecha'
                                autoFocus={true}
                                onChange={ handleInputChange }
                            />

                        {/* <button 
                            className='btn btn-secondary m-2  btn-sm boton-filtro-cafe'
                            // onClick={ handleClick }
                            value=''>
                            FECHA FIN
                        </button> */}
                        
                    </div>
                    <div className='d-flex justify-content-start mt-2'>


                        {/* <button 
                            className='btn btn-secondary m-2  btn-sm boton-filtro-cafe'
                            // onClick={ handleClick }
                            value=''>
                            FECHA FIN
                        </button> */}
                        <label htmlFor='nombre'>Fecha fin:</label>
                            <input
                                type='date'
                                placeholder='fecha fin filtrado'
                                name='finFecha'
                                className='form-control'
                                autoComplete='off'
                                value={ finFecha }
                                id='finFecha'
                                onChange={ handleInputChange }
                            />
                    </div>
                    
                </div>
                

            </div>

        </div>


    </>

    
  )
}

export default BotonesFiltradoPedidosAdmin