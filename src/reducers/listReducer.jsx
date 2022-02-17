

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


export const listReducer = ( state = listadoInicio, action ) => {

    switch ( action.type) {

        case types.modifyCant:

            let pedidoActualizado = [];
            
            state.map( cafe => cafe.id === action.payload.id ? ( pedidoActualizado = [ ...pedidoActualizado, action.payload.cafe]) : ( pedidoActualizado = [ ...pedidoActualizado, cafe]) );
            
            return pedidoActualizado;

        case types.listProductInit:
            return listadoInicio;

        case types.addProduct:
            return [
                ...state,
                action.payload
            ];
        
        case types.removeProduct:
            
            return state.filter( producto => producto.id !== action.payload );
    
        default:
            return state;
    }
}