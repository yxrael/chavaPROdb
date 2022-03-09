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

    const listadoPedidos = await db.collection('listado').get();
    let listado = [];

    listadoPedidos.forEach( snapHijo => {

        listado.push(snapHijo.data().listado);

    });

    return listado[0];

}