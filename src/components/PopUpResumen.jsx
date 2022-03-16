

const PopUpResumen = ( {muestraDetalle, setMuestraDetalle, cafeSeleccionado, setCafeSeleccionado} ) => {

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
                <img src="https://firebasestorage.googleapis.com/v0/b/chavapro-9a967.appspot.com/o/SACONUEVORecurso%2031.png?alt=media&token=168b38f3-87d1-4ad6-9cf7-fd8c0e2699aa" className="img-fluid" alt='Detalle ${cafeSeleccionado.nombre}'>
                </img>
                <p>Foto/PDF Resumen</p>
                <p>{ cafeSeleccionado.nombre }</p>
            </div>

            
            
        </div>

    )
}

export default PopUpResumen