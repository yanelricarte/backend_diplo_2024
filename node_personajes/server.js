const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
const hbs = require("hbs");
const personajesRouter = require('./routes/personajesRoutes');

//Cargar variables de entorno 
dotenv.config();

//Conectar a la base de datos MongoDB
connectDB();

//Configurar Handlebars 
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views")); 
hbs.registerPartials(path.join(__dirname, "views", "partials")); 

// Middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, "../public"))); 

// Middleware para definir rutas relacionadas con los personajes
app.use("/personajes", personajesRouter); 

app.get("/", (req, res) =>{
  res.render("index", {
    layout: "layouts/main",
    title: "Inicio", 
    message: "Bienvenidos a nustra aplicacion",
  })
})

app.use((req, res, next) =>{
  res.status(404).render("error404", { title: "página no encontrada"});
})

//Iniciar el servidor 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
})