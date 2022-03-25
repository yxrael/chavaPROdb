

export const filtradorPorPais = ( listado, continente, descafeinado, tipoCliente ) => {

    if(continente === '' || continente === 'TODOS'){
        return listado.filter( cafe => cafe.tipoCliente === tipoCliente);
    };

    if (descafeinado === true) {
        return listado.filter( cafe => cafe.continente === continente && cafe.tipoCliente === tipoCliente && cafe.descafeinado === descafeinado );
    } else {
        return listado.filter( cafe => cafe.continente === continente && cafe.tipoCliente === tipoCliente );
    }

    

}

export const filtradorPedidosPorFecha = ( listado, fechaInicio, fechaFin, estado ) => {


    if( fechaInicio === '' || fechaFin === ''){
        return listado;
    };

    const filtrado = listado.filter( pedido => pedido.date >= fechaInicio && pedido.date <= fechaFin && pedido.completado === estado );
   
    return filtrado;

}
