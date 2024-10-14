const Personaje = require("../models/personajeModel");

// Obtener todos los personajes
const getAllPersonajes = async (req, res) => {
  try {
    const personajes = await Personaje.find();
    res.render("personajes", { layout: "layouts/main", personajes });
  } catch (error) {
    console.error("Error al obtener personajes:", error);
    res.status(500).send("Hubo un error al obtener los personajes");
  }
};

//Crear un nuevo personaje
const createPersonaje = async (req, res) => {
  const { nombre, edad, casa, rol } = req.body;
  try {
    const nuevoPersonaje = new Personaje({
      nombre,
      edad: parseInt(edad),
      casa,
      rol,
    });
    await nuevoPersonaje.save();
    res.redirect("/personajes");
  } catch (error) {
    console.error("Error al crear personaje:", error);
    res.status(500).send("Hubo un error al crear el personaje");
  }
};

module.exports = {
  getAllPersonajes,
  createPersonaje,
};
