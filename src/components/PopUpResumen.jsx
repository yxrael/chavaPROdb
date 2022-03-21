

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
                        className="img-fluid"
                        src={ cafeSeleccionado.rutaURL }>
                    </img>
                    <div className="d-flex justify-content-end  p-4">
                    <button
                        className='btn btn-danger btn-sm'
                        onClick={ handleCerrar }
                        type='submit'>
                        X
                    </button>
                    </div>
                    <p>Foto/PDF Resumen</p>
                    <p>{ cafeSeleccionado.nombre }</p> 
                </div>

            </div>
            
            
        </div>

    )
}

export default PopUpResumen