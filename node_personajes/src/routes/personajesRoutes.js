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

// Ruta para mostrar el formulario de edicion
router.get("/edit/:id", personajesController.editPersonaje);


//Ruta para manejar la actualización de un personaje
router.post("/edit/:id", personajesController.updatePersonaje);

//Ruta para eliminar personaje
router.get("/delete/:id", personajesController.deletePersonaje)


module.exports = router;
