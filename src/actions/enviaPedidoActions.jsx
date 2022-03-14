
import { types } from "../types/types"
import { db } from '../firebase/firebase-config';

export const enviaPedido = ( pedido ) => (
    
    {
       type: types.enviaPedido,
       payload: pedido
    }
);

export const enviaPedidoDB = async (pedidoObj) => {

        const { date, pedidoId, uid, name, seleccion, precioTotal, observaciones, tipoCliente } = pedidoObj;

        let seleccionShort = [];
        
        // seleccion.map( producto => {
        //     seleccionShort = [...seleccionShort, {
        //         id: producto.id,
        //         nombre: producto.nombre,
        //         pais: producto.pais,
        //         proceso: producto.proceso,
        //         cantidad: producto.cantidad
        //     }]
        // });

        seleccion.forEach(producto => {
            seleccionShort = [...seleccionShort, {
                id: producto.id,
                nombre: producto.nombre,
                pais: producto.pais,
                proceso: producto.proceso,
                cantidad: producto.cantidad
            }]
        });


        const pedidoDB = {
            pedidoId,
            uid,
            name,
            date,
            total: precioTotal,
            observaciones,
            tipoCliente,
            completado: false,
            seleccionShort
        };

        // const pedido = await db.collection(`pedidos`).add( pedidoDB );
        // const pedido = await db.collection(`pedidos`).doc(`${pedidoDB.pedidoId}`).set( pedidoDB );
        db.collection(`pedidos`).doc(`${pedidoDB.pedidoId}`).set( pedidoDB );

}