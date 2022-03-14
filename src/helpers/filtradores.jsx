

export const filtradorPorPais = ( listado, continente, tipoCliente ) => {

    if(continente === ''){
        return listado.filter( cafe => cafe.tipoCliente === tipoCliente);
    };

    return listado.filter( cafe => cafe.continente === continente && cafe.tipoCliente === tipoCliente);

}

export const filtradorPedidosPorFecha = ( listado, fechaInicio, fechaFin, estado ) => {


    if( fechaInicio === '' || fechaFin === ''){
        return listado;
    };

    const filtrado = listado.filter( pedido => pedido.date >= fechaInicio && pedido.date <= fechaFin && pedido.completado === estado );
   
    return filtrado;

}
