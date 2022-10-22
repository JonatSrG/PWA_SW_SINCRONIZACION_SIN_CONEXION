

//Utilidades para grabar Pouch DB

const db = new PouchDB('mensajes');

function guardarMensaje( mensaje ) {

    mensaje._id = new Date().toISOString();

    return db.put( mensaje ).then( () => {

        self.registration.sync.register('nuevo-post');

        const newResp = { ok:true, offliine:true };

        return new Response( JSON.stringify(newResp) );




    });

}

//Postear mensajes a la BD
function postearMensaje() {

    return db.allDocs({ includes_docs: true }).then( docs => {

        const posteos = [];

        docs.rows.forEach( row => {

            const doc = row.doc;

            const fetchPom = fetch('api', {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( doc )
            }).then( res => {

                return db.remove( doc );

            });

            posteos.push( fetchPom );

        });//foreach

        return Promise.all( posteos );

    });

}