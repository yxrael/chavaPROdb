

export const actualizadorLista = ( seleccion ) => {

    // const seleccionados = seleccion || JSON.parse(localStorage.getItem('listadoCafes'));

    let precioTotal = 0;

    seleccion.map( producto => {
        precioTotal = precioTotal + (producto.cantidad * producto.precio);
    })

    return precioTotal;
}