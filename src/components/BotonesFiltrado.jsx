import React from 'react'
import { useNavigate } from 'react-router-dom';


const BotonesFiltrado = () => {

    const navigate = useNavigate();

    return (

        <div className='container d-flex justify-content-evenly'>
            <button 
                className='btn btn-secondary mt-2'
                onClick={ (e) => navigate(`/filtered?q=${ e.target.value }`)  }
                value=''>
                TODOS
            </button>
            <button 
                className='btn btn-secondary mt-2'
                onClick={ (e) => navigate(`/filtered?q=${ e.target.value }`) }
                value='AMERICA'>
                AMERICA
            </button>
            <button 
                className='btn btn-secondary mt-2'
                onClick={ (e) => navigate(`/filtered?q=${ e.target.value }`)  }
                value='AFRICA'>
                AFRICA
            </button>
            <button 
                className='btn btn-secondary mt-2'
                onClick={ (e) => navigate(`/filtered?q=${ e.target.value }`)  }
                value='ASIA'>
                ASIA
            </button>
        </div>
    )
}

export default BotonesFiltrado
