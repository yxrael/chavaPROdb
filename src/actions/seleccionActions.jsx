import { types } from "../types/types"


// export const addSelection = ( pedido ) => (
    
//    {
//       type: types.addSelection,
//       payload: pedido
//    }
// );


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

// export const addSeleccion = ( seleccionado ) =>( 
//     {
//       type: types.addSelection,
//       payload: seleccionado
//    })
