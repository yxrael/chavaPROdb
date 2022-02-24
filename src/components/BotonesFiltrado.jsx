import React from 'react'
import { useNavigate } from 'react-router-dom';


const BotonesFiltrado = () => {

    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        navigate(`/filtered?q=${ e.target.value }`);
    }

    return (

        <>
        
            {/* <div className='container d-flex justify-content-around mxwListados'> */}
            <div className='container mxwListados'>

            
                <div className='row'>

                    <div className='col-4'>
                        <div className='d-flex justify-content-start'>
                            <button 
                                className='btn btn-secondary mt-2 btn-sm boton-filtro-cafe'
                                onClick={ handleClick }
                                value='AMERICA'>
                                AMERICA
                            </button>
                        </div>
                        <div className='d-flex justify-content-start'>
                            <button 
                                className='btn btn-secondary mt-2 btn-sm boton-filtro-cafe'
                                onClick={ handleClick }
                                value=''>
                                TODOS
                            </button>
                        </div>
                    </div>
                    
                    <div className='col-4'>
                        <div className='d-flex justify-content-center'>
                            <button 
                                className='btn btn-secondary mt-2 btn-sm boton-filtro-cafe'
                                onClick={ handleClick }
                                value='AFRICA'>
                                AFRICA
                            </button>
                        </div>
                        
                    </div>

                    <div className='col-4'>
                        <div className='d-flex justify-content-end'>
                            <button 
                                className='btn btn-secondary mt-2 btn-sm boton-filtro-cafe'
                                onClick={ handleClick }
                                value='ASIA'>
                                ASIA
                            </button>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button 
                                className='btn btn-secondary mt-2 btn-sm boton-filtro-cafe'
                                onClick={ handleClick }
                                value='DESCAFEINADO'>
                                DESCAFEINADO
                            </button>
                        </div>
                    </div>
        
                </div>

            </div>
        
        </>


    )
}

export default BotonesFiltrado
