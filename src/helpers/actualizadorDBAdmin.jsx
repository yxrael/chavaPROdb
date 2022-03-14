import { db } from '../firebase/firebase-config';

export const actualizaListadoDB =  async ( listado ) => {

    let seleccion = {
        listado: []
    };

    listado.map( producto => seleccion.listado.push(producto));
   
    await db.collection(`/listado`).doc('lista').set( seleccion );
    
}

export const actualizaPedidosDB = async ( nuevoEstado ) => {

    await db.collection('/pedidos').doc(`${nuevoEstado.pedidoId}`).set( nuevoEstado );
    

}

// export const nuevoClienteDB = async ( nuevoCliente) => {

//     const cliente = {

//         name: nuevoCliente.name,
//         establecimiento: nuevoCliente.establecimiento,
//         email: nuevoCliente.email,         
//         tipoCliente: nuevoCliente.tipoCliente
//     }

//     console.log(cliente);

//     await db.collection('clientes').doc(`${nuevoCliente.uid}`).set( cliente );
// }




   
