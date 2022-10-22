// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();


const mensajes = [{

  _id: '1111',
  user: 'spiderman',
  mensaje: 'Hola Mundo'

}/* ,
{

  _id: '2222',
  user: 'iroman',
  mensaje: 'Hola Mundo'

},
{

  _id: '3333',
  user: 'hulk',
  mensaje: 'Hola Mundo!'

}, */
];




// Get mensajes
router.get('/', function (req, res) {
  //res.json('Obteniendo mensajes');
  res.json( mensajes );
});

router.post('/', function (req, res) {
  
  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user
  };

  mensajes.push( mensaje );

  console.log(mensajes);

  res.json( {
    ok: true,
    mensaje
  } );

});




module.exports = router;