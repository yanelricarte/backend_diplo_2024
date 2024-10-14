const express = require("express");
const router = express.Router();
const path = require("path");
const personajesController = require("../controllers/personajesController");



// Ruta para mostrar todos los personajes
router.get("/", personajesController.getAllPersonajes);
// Ruta para mostrar el formulario
router.get("/crear", (req, res) => {
  res.render("formulario", { layout: "layouts/main" });
});

//Ruta para crear un nuevo personaje 
router.post("/crear", personajesController.createPersonaje);

module.exports = router;