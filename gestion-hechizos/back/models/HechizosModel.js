const mongoose = require('mongoose');

const hechizoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  nivel: { type: Number, required: true },
});

module.exports = mongoose.model('Hechizo', hechizoSchema);
