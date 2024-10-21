const { default: mongoose } = require("mongoose");
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


// Crear un nuevo personaje
const createPersonaje = async (req, res) => {
  const { nombre, edad, casa, rol } = req.body;
  const imagenPath = req.file ? req.file.filename : ""; // Ruta de la imagen guardada en el servidor

  // Validar que los datos sean válidos
  if (!nombre || isNaN(parseInt(edad)) || !casa || !rol) {
    return res
      .status(400)
      .send("Todos los campos son obligatorios y la edad debe ser un número");
  }

  try {
    const nuevoPersonaje = new Personaje({
      nombre,
      edad: parseInt(edad),
      casa,
      rol,
      imagen: imagenPath,
    });
    await nuevoPersonaje.save();
    res.status(303).redirect("/personajes");
  } catch (error) {
    console.error("Error al crear personaje:", error);
    res.status(500).send("Hubo un error al crear el personaje");
  }
};

// Editar un personaje
const editPersonaje = async (req, res) => {
  try {
    const personaje = await Personaje.findById(req.params.id);
    if (!personaje) {
      return res.status(404).send("Personaje no encontrado");
    }
    res.render("editPersonaje", { layout: "layouts/main", personaje });
  } catch (error) {
    console.error("Error al obtener el personaje:", error);
    res.status(500).send("Hubo un error al obtener el personaje");
  }
};

// Actualizar personaje
const updatePersonaje = async (req, res) => {
  const { nombre, edad, casa, rol } = req.body;
  const imagenPath = req.file ? req.file.filename : '';

  /* Validar que los datos sean válidos*/
  if (!nombre || isNaN(parseInt(edad)) || !casa || !rol) {
    return res
      .status(400)
      .send("Todos los campos son obligatorios y la edad debe ser un número");
  }
  // Obtener y limpiar el ID personaje
  const personajeId = req.params.id.trim(); //Eliminar espacios
  console.log("ID del personaje", personajeId);

  // Validar que el ID sea valido
  if (!mongoose.Types.ObjectId.isValid(personajeId)) {
    return res.status(400).send("ID de personaje no válido");
  }
  try {
    const personajeActualizado = await Personaje.findByIdAndUpdate(
      personajeId,
      {
        nombre,
        edad: parseInt(edad),
        casa,
        rol,
        imagen: imagenPath,
      },
      { new: true }
    );

    if (!personajeActualizado) {
      return res.status(404).send("Personaje no encontrado");
    }
    res.status(303).redirect("/personajes");
  } catch (error) {
    console.error("Error al actualizar el personaje:", error);
    res.status(500).send("Hubo un error al actualizar el personaje");
  }
};

// Eliminar un personaje
const deletePersonaje = async (req, res) => {
  try {
    const personajeEliminado = await Personaje.findByIdAndDelete(req.params.id);
    if (!personajeEliminado) {
      return res.status(404).send("Personaje no encontrado");
    }
    res.status(303).redirect("/personajes");
  } catch (error) {
    console.error("Error al eliminar el personaje:", error);
    res.status(500).send("Hubo un error al eliminar el personaje");
  }
};

module.exports = {
  getAllPersonajes,
  createPersonaje,
  editPersonaje,
  updatePersonaje,
  deletePersonaje,
};
