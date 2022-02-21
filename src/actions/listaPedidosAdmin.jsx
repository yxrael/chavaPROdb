import { types } from "../types/types"


export const cargaListaPedidos = ( listado ) => ({ 
        type: types.cargaListaPedidos,
        payload: listado
} )