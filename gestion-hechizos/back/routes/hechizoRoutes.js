const express = require('express');
const router = express.Router();
const hechizoController = require('../controllers/hechizosController');

// Rutas para los hechizos
router.get('/', hechizoController.getHechizos);
router.post('/', hechizoController.createHechizo);

/* 
router.get('/:id', hechizoController.getHechizoById);

router.put('/:id', hechizoController.updateHechizo);
router.delete('/:id', hechizoController.deleteHechizo);
*/
module.exports = router;
