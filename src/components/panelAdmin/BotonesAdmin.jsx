import React from 'react'
import { useNavigate } from 'react-router-dom';
import BotonesFiltradoPedidosAdmin from './BotonesFiltradoPedidosAdmin';
import BotonesFiltradoProductosAdmin from './BotonesFiltradoProductosAdmin';


const BotonesAdmin = ( {vista, setVista, fechasFiltrado, setFechasFiltrado, toggleEstado, setToggleEstado} ) => {

    const navigate = useNavigate();

    return (
        <>
            <div className='container d-flex justify-content-between mxwListados'>
                <button 
                    className='btn btn-secondary mt-2 btn-sm'
                    onClick={ () => navigate('/pedidos')  }
                    value='PEDIDOS'>
                    PEDIDOS
                </button>
                <button 
                    className='btn btn-secondary mt-2 btn-sm'
                    onClick={ () => navigate('/administrar')  }
                    value='PRODUCTOS'>
                    PRODUCTOS
                </button>
                <button 
                    className='btn btn-secondary mt-2 btn-sm'
                    onClick={ () => navigate('/register')  }
                    value='USUARIOS'>
                    USUARIOS
                </button>
            </div>

            {
                (vista === 'pedidos')
                &&
                <BotonesFiltradoPedidosAdmin
                    fechasFiltrado={fechasFiltrado}
                    setFechasFiltrado={setFechasFiltrado}
                    toggleEstado={toggleEstado}
                    setToggleEstado={setToggleEstado}
                 />
            }
            {/* {
                (vista === 'productos')
                &&
                <BotonesFiltradoProductosAdmin />      
            } */}

        </>
    )
}

export default BotonesAdmin