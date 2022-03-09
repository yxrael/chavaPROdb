import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';



const BotonesFiltradoPedidosAdmin = ( { fechasFiltrado, setFechasFiltrado }) => {

    const iniciaFechas = {
        inicioFecha: fechasFiltrado[0],
        finFecha: fechasFiltrado[1]
    }
    const [ formValues, handleInputChange ] = useForm( iniciaFechas );
    console.log(fechasFiltrado);
    const { inicioFecha, finFecha } = formValues;
    console.log(inicioFecha);
    console.log(finFecha);

    
    useEffect(() => {

        // setFechasFiltrado([ inicioFecha, finFecha ]);
        console.log(fechasFiltrado);

    }, [inicioFecha, finFecha]);
    

  return (
    <>
        <div className='container mxwListados'>

            
            <div className='form m-2'>

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