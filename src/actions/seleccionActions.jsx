import { types } from "../types/types"




export const filtrarSeleccion = ( listado ) => (
    
         {
            type: types.selectionSubmit,
            payload: [...listado]
         }
);

export const borrarSeleccion = ( id ) => (
   {
      type: types.removeSelection,
      payload: id
   }
);