
export const localStorageUpdater = ( seleccionados) => {

    localStorage.setItem('listadoCafes', JSON.stringify(seleccionados));

}

