

const filtradorPorPais = ( listado, continente ) => {

    if(continente === ''){
        return listado;
    };



    return listado.filter( cafe => cafe.continente === continente );

}

export default filtradorPorPais
