import { cargaListaPedidos } from '../actions/listaPedidosAdmin';
import { db } from '../firebase/firebase-config';

// export const cargaPedidos = async ( dispatch ) => {

//         const listadoPedidos = await db.collection('pedidos').orderBy('date', 'desc').get();
//         let listado = [];

//         listadoPedidos.forEach( snapHijo => {

//             listado.push(snapHijo.data());
//         });

//         dispatch( cargaListaPedidos(listado) );

//         return listado;

// }

export const cargaPedidosSinDispatch = async ( ) => {

    //    const fecha1 = '01/01/2000';
    
    //     const fecha2 = moment( new Date() ).format('DD/MM/YYYY');

    const listadoPedidos = await db.collection('pedidos').orderBy('date', 'desc').get();
    // const listadoPedidos = await db.collection('pedidos').where('date', '>', '01/01/2000' ).where('date', '<', '08/03/2022' ).orderBy('date', 'desc').get();
    // const listadoPedidos = await db.collection('pedidos').where('date', '>', fecha1 ).where('date', '<', fecha2 ).orderBy('date', 'desc').get();

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
