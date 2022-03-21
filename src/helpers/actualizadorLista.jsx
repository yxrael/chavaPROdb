
export const actualizadorLista = ( seleccion ) => {

    let precioTotal = 0;

    seleccion.forEach( producto => {
        precioTotal = precioTotal + (producto.cantidad * producto.precio);
    })

    return precioTotal;
}

export const actualizadorUnidadesLista = ( seleccion ) => {

    let unidadesTotal = 0;

    seleccion.forEach( producto => {
        unidadesTotal = unidadesTotal + producto.cantidad;
    })

    return unidadesTotal;
}