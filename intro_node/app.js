// Importar módulos
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const routes = require('./routes/routes'); // Importar rutas

// Inicializar la aplicación
const app = express();
const port = 3002;

// -------------------------- MIDDLEWARE -------------------------- //

// Middleware para servir contenido estático
app.use(express.static(path.join(__dirname, './public')));

// Middleware para procesar formularios
app.use(express.urlencoded({ extended: true }));

// -------------------------- CONFIGURACIÓN DE RUTAS -------------------------- //

// Archivo de rutas
app.use('/', routes);

// -------------------------- CONFIGURACIÓN DEL MOTOR DE PLANTILLAS -------------------------- //

// Configurar el motor de plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Registrar parciales
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

// -------------------------- INICIAR EL SERVIDOR -------------------------- //
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
