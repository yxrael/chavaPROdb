import { types } from "../types/types"

export const addSeleccion = ( seleccionado ) => {
      return {
         type: types.addSelection,
         payload: seleccionado
      }
   }

export const modificaProducto = ( id, cafe ) =>{ 

   return {
         type: types.modifyProd,
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

export const filtraDisponibles = () => {

   return {
      type: types.filterAvailable
   }
};

export const eliminaProducto = ( id ) =>{ 

   return {
         type: types.removeProduct,
         payload: id
   }
}

export const filtraListadoClientesDisponible = ( listado, tipoCliente ) => {

   return listado.filter( producto => producto.disponible === true && producto.tipoCliente === tipoCliente );
}

export const cargaListaInicio = ( listado ) => {
   
   return {
      type: types.ListInit,
      payload: listado
   }
}

export const nuevoProductoLista = ( producto ) => {
   return {
      type: types.addProduct,
      payload: producto
   }
}