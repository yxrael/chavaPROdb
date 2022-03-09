import { cargaListaPedidos } from '../actions/listaPedidosAdmin';
import { db } from '../firebase/firebase-config'

// export const cargaPedidos = async ( dispatch ) => {

//         const listadoPedidos = await db.collection('pedidos').orderBy('date', 'desc').get();
//         let listado = [];

//         listadoPedidos.forEach( snapHijo => {

//             listado.push(snapHijo.data());
//         });

//         dispatch( cargaListaPedidos(listado) );

//         return listado;

// }

export const cargaPedidosSinDispatch = async () => {

    const listadoPedidos = await db.collection('pedidos').orderBy('date', 'desc').get();
    let listado = [];

    listadoPedidos.forEach( snapHijo => {

        listado.push(snapHijo.data());
    });

    return listado;

}

export const cargaPedidosCliente = async ( uid, dispatch ) => {

    const listadoPedidos = await db.collection('pedidos').orderBy('date', 'desc').get();
    let listado = [];

    listadoPedidos.forEach( snapHijo => {

        listado.push(snapHijo.data());
    });

    const listadoCliente = listado.filter( pedido => pedido.uid === uid);

    dispatch( cargaListaPedidos(listadoCliente) );

    return listadoCliente;

}
