const express = require('express');
const router = express.Router();
const BuildingController = require('../controller/building.controller');

router.get('/', BuildingController.findAll);

router.post('/', BuildingController.create);

router.get('/:id', BuildingController.findById);

router.put('/:id', BuildingController.update);

router.delete('/:id', BuildingController.delete);

module.exports = router;
