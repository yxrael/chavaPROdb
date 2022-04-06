import { db } from '../firebase/firebase-config';

export const actualizaListadoDB =  async ( producto ) => {

        await db.collection(`/listado2`).doc(`${producto.id}`).set( producto );
   
};

export const borraProducto = async (id) => {
    await db.collection('listado2').doc(`${id}`).delete()
        .catch((error) => {
            console.error(error);
        })
};

export const borraImagenProducto = async (id) => {
    await db.collection('listado2').doc(`${id}`).update({ rutaURL: ''})
        .catch((error) => {
            console.error(error);
        });
    await db.collection('listado2').doc(`${id}`).update({ fileName: ''})
        .catch((error) => {
            console.error(error);
        })
};

export const actualizaPedidosDB = async ( nuevoEstado ) => {

    await db.collection('/pedidos').doc(`${nuevoEstado.pedidoId}`).set( nuevoEstado );
    

};




   
