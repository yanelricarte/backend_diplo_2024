const express = require('express');
const app = express();
const routes = require('./routes/routes');
const port = 3000;

//Middleware para servir contenido estático
app.use(express.static('public'));

app.use('/', routes)
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});