
import { types } from "../types/types"
import { db } from '../firebase/firebase-config';

export const enviaPedido = ( pedido ) => (
    
    {
       type: types.enviaPedido,
       payload: pedido
    }
);



export const enviaPedidoDB = () => {

    return async ( dispatch, getState ) => {

        const { uid } = getState().auth;
        const { date, pedidoId } = getState().pedidos;

        const pedidoDB = {
            uid,
            date,
            completado: false
        };

        const pedido = await db.collection(`${pedidoId}/datosPedido`).add( pedidoDB);

        console.log(pedido);

    }

}