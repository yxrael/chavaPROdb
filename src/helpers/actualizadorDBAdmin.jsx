import { db } from '../firebase/firebase-config';

export const actualizaListadoDB =  async ( producto ) => {

    // let seleccion = {
    //     listado: []
    // };

    // listado.map( producto => seleccion.listado.push(producto));
   
    // await db.collection(`/listado`).doc('lista').set( seleccion );

    // listado.forEach( async producto => {
        await db.collection(`/listado2`).doc(`${producto.id}`).set( producto );
    // });
   
}

export const borraProducto = async (id) => {
    await db.collection('listado2').doc(`${id}`).delete()
        .catch((error) => {
            console.error(error);
        })
}

export const borraImagenProducto = async (id) => {
    await db.collection('listado2').doc(`${id}`).update({ rutaURL: ''})
        .catch((error) => {
            console.error(error);
        });
    await db.collection('listado2').doc(`${id}`).update({ fileName: ''})
        .catch((error) => {
            console.error(error);
        })
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




   
