

const PopUpResumen = ( { rutaURL, muestraDetalle, setMuestraDetalle, cafeSeleccionado, setCafeSeleccionado} ) => {

    const handleCerrar = (e) => {
        e.preventDefault();
        setCafeSeleccionado('');
        setMuestraDetalle(false)
    }

    return (

        <div className='modal d-flex flex-colum'>
            <div className="d-flex justify-content-end">
                <button
                    className='btn btn-danger'
                    onClick={ handleCerrar }
                    type='submit'>
                    X
                </button>
            </div>
            <div>
                <img src={ rutaURL }>
                </img>
                <p>Foto/PDF Resumen</p>
                <p>{ cafeSeleccionado.nombre }</p>
            </div>
            
        </div>

    )
}

export default PopUpResumen