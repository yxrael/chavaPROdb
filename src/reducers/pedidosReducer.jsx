
/*
    [
        {
            
            fecha: 01/01/2000,
            user: asveopavoesvsesw,
            pedidoId: 123456,
            completado: false,
            seleccion: {
                        [ id, pais, nombre, proceso, infoExtra],
                        [],
                        []
            }
        }
    ]
*/

import { types } from "../types/types"

export const pedidosReducer = ( state = [], action) => {

    switch (action.type) {

        case types.enviaPedido:
            console.log(action.payload);
            console.log(state);
            return [...state, action.payload ];
    
        default:
            return state;
    }


}