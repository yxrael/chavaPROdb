import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BotonesFiltrado = ( ) => {

    const [ toggleDesca, setToggleDesca ] = useState(false);
    const [ paisSeleccion, setPaisSeleccion ] = useState('TODOS');

    const navigate = useNavigate();
 
    const handleClick = (e) => {
        e.preventDefault();

        // setToggleDesca(false);
        setPaisSeleccion(e.target.value);
        navigate(`/filtered?q=${ e.target.value }&q=${toggleDesca}`);
    }

    const handleClickTodos = (e) => {
        e.preventDefault();

        setToggleDesca(false);
        setPaisSeleccion('TODOS');
        navigate(`/filtered`);
    }

    const handleClickDescafeinado = (e) => {
        e.preventDefault();

        setToggleDesca( !toggleDesca );

    };

    useEffect(() => {
        navigate(`/filtered?q=${paisSeleccion}&q=${toggleDesca}`);
    }, [toggleDesca])

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
                                onClick={ handleClickTodos }
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
                            {/* <button 
                                className='btn btn-secondary mt-2 btn-sm boton-filtro-cafe'
                                onClick={ handleClickDescafeinado }
                                value='DESCAFEINADO'>
                                DESCAFEINADO
                            </button> */}

                        {  toggleDesca
                                ? (
                                    <button 
                                        className='btn btn-info btn-sm m-2'
                                        onClick={ handleClickDescafeinado }
                                    >
                                        DESCAFEINADO{' '}
                                        <i className="fa-solid fa-toggle-on"></i>
                                    </button>
                                )
                                :
                                (
                                        <button 
                                        className='btn btn-secondary btn-sm m-2'
                                        onClick={ handleClickDescafeinado }
                                        >
                                            DESCAFEINADO{' '}
                                            <i className="fa-solid fa-toggle-off"></i>   
                                        </button>                 
                                )
                    }

                        </div>
                    </div>
        
                </div>

            </div>
        
        </>


    )
}

export default BotonesFiltrado
