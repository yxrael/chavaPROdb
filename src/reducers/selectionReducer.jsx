import { types } from "../types/types";



export const selectionReducer = ( state = [], action) => {

    switch ( action.type) {

        case types.addSelection:

            return [
                ...state,
                action.payload
            ];
        
        case types.removeSelection:
            
            return state.filter( producto => producto.id !== action.payload );

        case types.selectionSubmit:
        
            return action.payload.filter( producto => producto.cantidad !== 0 );

        default:
            return state;

    }
}