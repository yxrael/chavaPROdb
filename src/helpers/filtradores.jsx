

export const filtradorPorPais = ( listado, continente ) => {

    if(continente === ''){
        return listado;
    };

    return listado.filter( cafe => cafe.continente === continente );

}

export const filtradorPedidosPorFecha = ( listado, fechaInicio, fechaFin, estado ) => {


    if( fechaInicio === '' || fechaFin === ''){
        return listado;
    };

    const filtrado = listado.filter( pedido => pedido.date >= fechaInicio && pedido.date <= fechaFin && pedido.completado === estado );
   
    return filtrado;

}