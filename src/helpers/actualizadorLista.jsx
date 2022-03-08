
export const actualizadorLista = ( seleccion ) => {

    let precioTotal = 0;

    seleccion.forEach( producto => {
        precioTotal = precioTotal + (producto.cantidad * producto.precio);
    })

    return precioTotal;
}