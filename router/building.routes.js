const express = require('express');
const router = express.Router();
const BuildingController = require('../controller/building.controller');

// Отримати всі будинки
router.get('/', BuildingController.findAll);

// Створити новий будинок
router.post('/', BuildingController.create);

// Отримати будинок за ID
router.get('/:id', BuildingController.findById);

// Оновити будинок
router.put('/:id', BuildingController.update);

// Видалити будинок
router.delete('/:id', BuildingController.delete);

module.exports = router;
