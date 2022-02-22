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
        
            <div className='container d-flex justify-content-around mxwListados'>
    
                <button 
                    className='btn btn-secondary mt-2 btn-sm'
                    onClick={ handleClick }
                    value='AMERICA'>
                    AMERICA
                </button>
                <button 
                    className='btn btn-secondary mt-2 btn-sm'
                    onClick={ handleClick }
                    value='AFRICA'>
                    AFRICA
                </button>
                <button 
                    className='btn btn-secondary mt-2 btn-sm'
                    onClick={ handleClick }
                    value='ASIA'>
                    ASIA
                </button>
    
            </div>

            <div className='container d-flex justify-content-evenly mxwListados'>
                <button 
                    className='btn btn-secondary mt-2 btn-sm'
                    onClick={ handleClick }
                    value=''>
                    TODOS
                </button>
    
                <button 
                    className='btn btn-secondary mt-2 btn-sm'
                    onClick={ handleClick }
                    value='DESCAFEINADO'>
                    DESCAFEINADO
                </button>
            </div>
        
        </>


    )
}

export default BotonesFiltrado
