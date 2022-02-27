
import { db } from '../firebase/firebase-config';
// import { firebase } from '../firebase/firebase-config';


export const actualizaListadoDB =  async ( listado ) => {

    // const { date, pedidoId, uid, name, seleccion } = pedidoObj;
    // console.log(listado);

    let seleccion = {
        listado: []
    };

    listado.map( producto => seleccion.listado.push(producto));

    // const pedidoDB = {
    //     pedidoId,
    //     uid,
    //     name,
    //     date,
    //     completado: false,
    //     seleccionShort
    // };

    // console.log(' listado enviado a DB' + seleccion);
   
    await db.collection(`/listado`).doc('lista').set( seleccion );
    

}

// export const incluyeProductoBD = async ( producto ) => {

//     const nuevoProducto = {...producto}

//     await db.collection('/listado/lista/listado').set( nuevoProducto, { merge: true } );


// }