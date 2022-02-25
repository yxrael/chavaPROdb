

/*
    [ 
        {
        "id": "001",
        "pais": "Brasil",
        "nombre": "Joao Hamilton",
        "proceso": "Natural",
        "infoExtra": "fresa, caramelo, avellana, sidra",
        "precio": 23,
        "cantidad": 0,
        "disponible": true,
        "descafeinado": false,
        "continente": "AMERICA",
        },

    ]

*/

// test

import { listadoInicio } from "../data/listadoInicio";
import { types } from "../types/types";


export const listReducer = ( state = [], action ) => {

    switch ( action.type) {

        case types.modifyProd:

            let pedidoActualizado = [];
            
            state.map( cafe => cafe.id === action.payload.id
                ? ( pedidoActualizado = [ ...pedidoActualizado, action.payload.cafe])
                : ( pedidoActualizado = [ ...pedidoActualizado, cafe]) );
            
            return pedidoActualizado;

        case types.listProductInit:
            return listadoInicio;
        
        case types.ListInit:
            return action.payload;

        case types.addProduct:
            return [
                ...state,
                action.payload
            ];
        
        case types.removeProduct:
            
            return state.filter( producto => producto.id !== action.payload );

        case types.filterAvailable:

            return state.filter( producto => producto.disponible === true );

        // case types.toggleDispo:

        //     let pedidoActualizadoDispo = [];
            
        //     state.map( cafe => cafe.id === action.payload.id
        //         ? ( pedidoActualizadoDispo = [ ...pedidoActualizadoDispo, action.payload.cafe])
        //         : ( pedidoActualizadoDispo = [ ...pedidoActualizadoDispo, cafe]) );
            
        //     return pedidoActualizadoDispo;
    
        default:
            return state;
    }
}