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




   
