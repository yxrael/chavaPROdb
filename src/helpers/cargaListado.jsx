import { cargaListaInicio } from '../actions/listadosActions';
import { db } from '../firebase/firebase-config'

export const cargaListado = async ( dispatch ) => {

        const listadoPedidos = await db.collection('listado').get();
        let listado = [];

        listadoPedidos.forEach( snapHijo => {

            listado.push(snapHijo.data().listado);

        });

        dispatch( cargaListaInicio( listado[0] ) );

        return listado[0];

}

export const cargaListadosinDispatch = async ( dispatch ) => {

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