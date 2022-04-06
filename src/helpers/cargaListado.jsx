import { cargaListaInicio } from '../actions/listadosActions';
import { db } from '../firebase/firebase-config'

export const cargaListado = async ( dispatch ) => {

        const listadoPedidos = await db.collection('listado2').orderBy('descafeinado', 'asc').get();

        let listado = [];

        listadoPedidos.forEach( snapHijo => {

            listado.push(snapHijo.data());

        });

        dispatch( cargaListaInicio( listado ) );

        return listado;

}

export const cargaListadosinDispatch = async () => {

    const listadoPedidos = await db.collection('listado2').orderBy('descafeinado', 'asc').get();

    let listado = [];

    listadoPedidos.forEach( snapHijo => {

        listado.push(snapHijo.data());

    });

    // const listadoPedidos = await db.collection('listado').get();

    // let listado = [];

    // listadoPedidos.forEach( snapHijo => {

    //     listado.push(snapHijo.data().listado);

    // });

    // return listado[0];
    return listado;
}
export const cargaListadosinDispatchTipoCliente = async ( filtroCliente ) => {

    const listadoPedidos = await db.collection('listado2').orderBy('descafeinado', 'asc').get();

    let listado = [];

    listadoPedidos.forEach( snapHijo => {

        if(snapHijo.data().tipoCliente === filtroCliente ){
            listado.push(snapHijo.data());
        }

    });
    
    return listado;
}

export const filtraPorTipoClienteAdmin = ( listado, filtroCliente ) => {

    let filtrado = [];

    listado.forEach( producto => {
        if( producto.tipoCliente === filtroCliente ){
            filtrado.push( producto );
        }
    });

    return filtrado;


}

// export const trasladaProductos = async () => {

//     const anteriores = await db.collection('listado').get();

//     let listado = [];

//     anteriores.forEach( snapHijo => {

//         listado.push(snapHijo.data().listado);

//     });

//     listado[0].forEach( async producto => {
//         console.log(producto);
//         await db.collection(`/listado2`).doc(`${producto.id}`).set( producto );
//     });

    
// }