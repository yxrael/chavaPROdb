
export const actualizadorLista = ( seleccion, bolsas ) => {

    let precioTotal = 0;

    seleccion.forEach( producto => {
        precioTotal = precioTotal + (producto.cantidad * producto.precio);
    })

    precioTotal = precioTotal + ( bolsas * 0.50)

    return precioTotal;
}

export const actualizadorUnidadesLista = ( seleccion ) => {

    let unidadesTotal = 0;

    seleccion.forEach( producto => {
        unidadesTotal = unidadesTotal + producto.cantidad;
    })

    return unidadesTotal;
}