const express = require('express');
const router = express.Router();

const nomina = require('../controllers/nomina.controller');

router.get('/', nomina.getNominas);
router.post('/', nomina.createNominas);
router.get('/:id', nomina.getNomina);
router.put('/:id', nomina.editNomina);
router.delete('/:id', nomina.deleteNomina);

module.exports = router;