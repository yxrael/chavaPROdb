


export const calculaMaximoNumeroProducto = ( listado ) => {

    let maximo = 0;

    listado.map( cafe => {
        if ( cafe.id > maximo ) {
            maximo = cafe.id
        }
         
    })

    return maximo + 1

}