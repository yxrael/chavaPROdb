

export const subeImagenDetalles = async ( rutaFile ) => {
    
    const cloudURL = 'https://api.cloudinary.com/v1_1/dtm3z7jee/upload';

    const formData = new FormData();
    formData.append('upload_preset','chava-pro');
    formData.append('file', rutaFile );

    try {

        const resp = await fetch (cloudURL, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            return [ cloudResp.secure_url, cloudResp.public_id];
        } else {
            throw await resp.json();
        }
        
    } catch (err) {
        throw err;
    }


}

export const borraImagenDetalles = async ( idImagen ) => {
    
    const cloudURL = 'https://api.cloudinary.com/v1_1/dtm3z7jee/destroy';

    const formData = new FormData();
    formData.append('upload_preset','chava-pro');
    formData.append('public_id', idImagen );

    try {

        const resp = await fetch (cloudURL, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            console.log(cloudResp);
            // return cloudResp.secure_url;
            return true;
        } else {
            throw await resp.json();
        }
        
    } catch (err) {
        throw err;
    }


}