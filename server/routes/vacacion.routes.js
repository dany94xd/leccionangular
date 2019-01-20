const express = require('express');
const router = express.Router();

const vacacion = require('../controllers/vacacion.controller');

router.get('/', vacacion.getVacaciones);
router.post('/', vacacion.createVacaciones);
router.get('/:id', vacacion.getVacacion);
router.put('/:id', vacacion.editVacacion);
router.delete('/:id', vacacion.deleteVacacion);

module.exports = router;