

import { cargaListaInicio } from '../actions/listadosActions';
import { cargaListaPedidos } from '../actions/listaPedidosAdmin';
import { db } from '../firebase/firebase-config'



// export const cargaPedidos = async ( dispatch ) => {
export const cargaListado = async ( dispatch ) => {

        const listadoPedidos = await db.collection('listado').get();
        let listado = [];

        listadoPedidos.forEach( snapHijo => {

            listado.push(snapHijo.data().listado);

        });

        dispatch( cargaListaInicio( listado[0] ) );

        return listado[0];

}