
import { types } from "../types/types"
import { db } from '../firebase/firebase-config';

export const enviaPedido = ( pedido ) => (
    
    {
       type: types.enviaPedido,
       payload: pedido
    }
);

export const enviaPedidoDB = async (pedidoObj) => {

        const { date, pedidoId, uid, completado, seleccion } = pedidoObj;

        let seleccionShort = [];
        seleccion.map( producto => {
            seleccionShort = [...seleccionShort, {
                nombre: producto.nombre,
                pais: producto.pais,
                proceso: producto.proceso,
                cantidad: producto.cantidad
            }]
        });

        const pedidoDB = {
            pedidoId,
            uid,
            date,
            completado: false,
            seleccionShort
        };

        const pedido = await db.collection(`pedidos`).add( pedidoDB );

}