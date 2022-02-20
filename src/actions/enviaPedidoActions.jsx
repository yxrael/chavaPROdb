
import { types } from "../types/types"

export const enviaPedido = ( pedido ) => (
    
    {
       type: types.enviaPedido,
       payload: pedido
    }
);