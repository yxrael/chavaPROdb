import Swal from "sweetalert2"

export const muestraError = ( mensaje1, mensaje2) => {

    Swal.fire({
        icon: 'error',
        title: 'Ups...',
        text: mensaje1,
        footer: mensaje2
      })
}