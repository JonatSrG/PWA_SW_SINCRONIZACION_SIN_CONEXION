

//Utilidades para grabar Pouch DB

const db = new PouchDB('mensajes');

function guardarMensaje( mensaje ) {

    mensaje._id = new Date().toISOString();

    db.put( mensaje ).then( () => {
        console.log('Mensaje Guardado para posterior posteo');
    });

}