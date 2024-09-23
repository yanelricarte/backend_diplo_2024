const express = require('express');
const app = express();
const hbs = require('hbs')
const path = require('path')
const routes = require('./routes/routes');
const port = 3000;

//Middleware para servir contenido estático
app.use(express.static(path.join(__dirname, "./public"))); 

// Middleware para procesar formularios
app.use(express.urlencoded ({extended: true}))

//Archivo de rutas
app.use('/', routes)

//Configurar el motor de plantilla
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "views")); 
hbs.registerPartials(path.join(__dirname, "views", "partials")); 



app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});