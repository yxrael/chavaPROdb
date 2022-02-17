

export const borraCafes = (id) => {

    const seleccionados = JSON.parse(localStorage.getItem('listadoCafes'));

    const listadoActualizado = seleccionados.filter( cafe => cafe.id !== id);

    localStorage.setItem( 'listadoCafes', JSON.stringify(listadoActualizado) );

    return listadoActualizado;

}