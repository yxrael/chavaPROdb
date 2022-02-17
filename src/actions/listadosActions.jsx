import { types } from "../types/types"

export const addSeleccion = ( seleccionado ) => {
      return {
         type: types.addSelection,
         payload: seleccionado
      }
   }

export const modificaCantidad = ( id, cafe ) =>{ 

   return {
         type: types.modifyCant,
         payload: {
            id,
            cafe
         }
   }
}

export const inicializaListado = () => {

   return {
      type: types.listProductInit
   }
}
