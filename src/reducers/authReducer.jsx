import { types } from "../types/types";


export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {

        case types.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName,
                tipoCliente: action.payload.tipoCliente
            }
        case types.logout:
            return {

            }
    
        default:
            return state;
    }
}