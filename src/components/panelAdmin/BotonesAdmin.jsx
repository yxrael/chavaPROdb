import React from 'react'
import { useNavigate } from 'react-router-dom';
import BotonesFiltradoPedidosAdmin from './BotonesFiltradoPedidosAdmin';

const BotonesAdmin = ( {vista, setVista, fechasFiltrado, setFechasFiltrado} ) => {

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
            </div>

            {
                (vista === 'pedidos')
                &&
                <BotonesFiltradoPedidosAdmin
                    fechasFiltrado={fechasFiltrado}
                    setFechasFiltrado={setFechasFiltrado}
                 />
            }
            {
                (vista === 'productos')
                &&
                <p>FILTRA PRODUCTOS</p>
            }

        </>
    )
}

export default BotonesAdmin