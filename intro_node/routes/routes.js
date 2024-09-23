const express = require('express');
const path = require('path');
const router = express.Router(); // Crear instancia router para definir las rutas

// Variable para almacenar el último usuario agregado
let usuario = {}; 

// -------------------------- RUTAS -------------------------- //

// Ruta principal que muestra todos los usuarios
router.get('/', (req, res) => {
  const usuarios = [
    { nombre: 'Cosme', edad: 45, email: 'cosme@gmail.com' },
    { nombre: 'Fulanito', edad: 35, email: 'fulanito@gmail.com' },
    { nombre: 'Paquito', edad: 65, email: 'paquito@gmail.com' }
  ];
  res.render('index', { usuarios }); 
});

// Ruta para mostrar el formulario de agregar usuario
router.get('/formulario', (req, res) => {
  res.render('formulario'); 
});

// Ruta para manejar la creación de un nuevo usuario
router.post('/formulario', (req, res) => {
  const { nombre, edad, email } = req.body;
  usuario = { nombre, edad, email }; // Guardar usuario en el objeto
  res.redirect('/mostrar-usuario'); // Redirigir a la vista de usuario
});

// Ruta sobre nosotros
router.get('/sobre-nosotros', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/sobre-nosotros.html'));
});

// Ruta para mostrar la vista del usuario
router.get('/mostrar-usuario', (req, res) => {
  res.render('mostrar-usuario', { usuario });
});

// Ruta para mostrar un usuario específico
router.get('/usuario', (req, res) => {
  const usuario = {
    nombre: 'Pepito',
    edad: 25,
    email: 'pepito@gmail.com'
  };
  res.render('usuario', { usuario });
});

// Ruta para manejar errores 404
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/404.html'));
});

// -------------------------- EXPORTAR RUTAS -------------------------- //
module.exports = router;
