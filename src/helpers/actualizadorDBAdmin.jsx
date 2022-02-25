
import { db } from '../firebase/firebase-config';


export const actualizaListadoDB =  async ( listado ) => {

    // const { date, pedidoId, uid, name, seleccion } = pedidoObj;
    // console.log(listado);
    // let seleccion = [];
    // listado.map( producto => {
        
    //     seleccion = [
    //         ...seleccion, 
    //         producto
    //     ]
    // });

    // const pedidoDB = {
    //     pedidoId,
    //     uid,
    //     name,
    //     date,
    //     completado: false,
    //     seleccionShort
    // };

    // console.log(' listado enviado a DB' + seleccion);
   

    const listaGuardada = await db.collection(`/listado`).set( { prueba: 'hola'} );
    console.log( listaGuardada );

}