import { types } from "../types/types";



export const listaPedidosAdminReducer = ( state = [], action) => {
    
    switch (action.type) {
        case types.cargaListaPedidos:
            return action.payload;
    
        default:
            return state;
    }
}