

export const filtradorPorPais = ( listado, continente, desca, tipoCliente ) => {

    if(continente === '' || continente === 'TODOS'){

        if(desca === 'true'){
    
            return listado.filter( cafe => cafe.tipoCliente === tipoCliente && cafe.descafeinado === true && cafe.disponible === true);
        };

        return listado.filter( cafe => cafe.tipoCliente === tipoCliente && cafe.disponible === true );
    };

    if(desca === 'true'){
    
        return listado.filter( cafe => cafe.continente === continente && cafe.tipoCliente === tipoCliente && cafe.descafeinado === true && cafe.disponible === true);
    };

    return listado.filter( cafe => cafe.continente === continente && cafe.tipoCliente === tipoCliente && cafe.disponible === true && cafe.descafeinado === false );

}

export const filtradorPedidosPorFecha = ( listado, fechaInicio, fechaFin, estado ) => {


    if( fechaInicio === '' || fechaFin === ''){
        return listado;
    };

    const filtrado = listado.filter( pedido => pedido.date >= fechaInicio && pedido.date <= fechaFin && pedido.completado === estado );
   
    return filtrado;

}


// if(desca === 'true'){
    
//     return listado.filter( cafe => cafe.tipoCliente === tipoCliente && cafe.descafeinado === true && cafe.disponible === true);
// }

// if(continente === '' || continente === 'TODOS'){
//     return listado.filter( cafe => cafe.tipoCliente === tipoCliente && cafe.disponible === true );
// } 

// return listado.filter( cafe => cafe.continente === continente && cafe.tipoCliente === tipoCliente && cafe.disponible === true && cafe.descafeinado === false );