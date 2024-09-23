const express = require('express')
const path = require('path');
const router = express.Router(); //Crear instancia router para definir las rutas

//path-join ---> para construir rutas 
router.get('/', (req, res) => {
  const usuarios = [
    {nombre: 'Cosme', edad: 45, email: 'cosme@gmail.com'},
    {nombre: 'Fulanito', edad: 35, email: 'fulanito@gmail.com'},
    {nombre: 'Paquito', edad: 65, email: 'paquito@gmail.com'}
  ]
  res.render('index', {usuarios}); 
});

router.get('/formulario', (req, res) =>{
  res.render('formulario');
})

router.get('/sobre-nosotros', (req, res) =>{
  res.sendFile(path.join(__dirname + '/../public/sobre-nosotros.html'))
})

router.get('/usuario', (req, res) =>{
  const usuario = {
    nombre: 'Pepito',
    edad: 25,
    email: 'cosme@gmail.com'
  }
  res.render('usuario', ({usuario}));
})


router.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname + '/../public/404.html'))
})

module.exports = router;