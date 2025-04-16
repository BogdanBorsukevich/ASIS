const express = require('express');
const router = express.Router();
const ServiceController = require('../controller/service.controller');

router.get('/', ServiceController.findAll);
router.post('/', ServiceController.create);
router.get('/:id', ServiceController.findById);
router.put('/:id', ServiceController.update);
router.delete('/:id', ServiceController.delete);

module.exports = router;
