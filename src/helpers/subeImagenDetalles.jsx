

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
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
        
    } catch (err) {
        throw err;
    }


}