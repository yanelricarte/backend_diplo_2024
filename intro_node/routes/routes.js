const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer'); // Importar Nodemailer
const router = express.Router(); // Crear instancia router para definir las rutas
const hbs = require('hbs');
const fs = require('fs');




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

// Ruta para manejar el envío de correos
router.post('/enviar-email', (req, res) => {
  const { nombre, email, mensaje } = req.body; // Obtener datos del formulario

  // Configuración de Nodemailer
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, 
    auth: {
      user: 'dawson50@ethereal.email', // Credenciales de Ethereal
      pass: 'vwB2Yr8bxPs5pDaSPJ',
    },
  });


//Leer y compilar la plantilla hbs
  const template = hbs.compile(fs.readFileSync(path.join(__dirname, '../views', 'email.hbs'), 'utf-8')); 

  // Generar el html del correo con plantilla y los datos del formulario
  const htmlToSend = template({ nombre, email, mensaje});

  // Configurar el contenido del correo
  const mailOptions = {
    from: email,
    to: 'naranjaspintadas@gmail.com', 
    subject: `Nuevo mensaje de ${nombre}`,
    html: htmlToSend,
  };

  // Enviar el correo
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).send('Error al enviar el correo: ' + error.message);
    }
    res.send('Correo enviado exitosamente.');
  });
});

// -------------------------- EXPORTAR RUTAS -------------------------- //
module.exports = router;
