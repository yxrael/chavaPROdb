

const PopUpResumen = ( { muestraDetalle, setMuestraDetalle, cafeSeleccionado, setCafeSeleccionado} ) => {

    const handleCerrar = (e) => {
        e.preventDefault();
        setCafeSeleccionado('');
        setMuestraDetalle(false)
    }

    return (

        <div className='modal'>
            <div className="d-flex justify-content-between">
                
                <div className="p-4">
                    <img 
                        className="modal__imagen"
                        src={ cafeSeleccionado.rutaURL }>
                    </img>
                    <button
                        className='btn btn-danger btn-sm rounded-circle m-2'
                        onClick={ handleCerrar }
                        type='submit'>
                        X
                    </button>
                    <div className="d-flex justify-content-center text-light font-italic mb-1">
                        <p>{ cafeSeleccionado.pais }{' '}-{' '}{ cafeSeleccionado.nombre }</p> 
                    </div>
                    
                </div>

            </div>
            
            
        </div>

    )
}

export default PopUpResumen