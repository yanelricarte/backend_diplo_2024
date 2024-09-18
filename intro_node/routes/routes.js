const express = require('express')
const path = require('path');
const router = express.Router(); //Crear instancia router para definir las rutas

//path-join ---> para construir rutas 
router.get('/', (req, res) =>{
  res.sendFile(path.join(__dirname + '/public/index.html'))
})

router.get('/contacto', (req, res) =>{
  res.sendFile(path.join(__dirname + '/../public/contacto.html'))
})

router.get('/sobre-nosotros', (req, res) =>{
  res.sendFile(path.join(__dirname + '/../public/sobre-nosotros.html'))
})


router.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname + '/../public/404.html'))
})

module.exports = router;