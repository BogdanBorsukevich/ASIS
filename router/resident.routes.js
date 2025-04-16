const express = require('express');
const router = express.Router();
const ResidentController = require('../controller/resident.controller');

router.get('/', ResidentController.findAll);
router.post('/', ResidentController.create);
router.get('/:id', ResidentController.findById);
router.put('/:id', ResidentController.update);
router.delete('/:id', ResidentController.delete);

module.exports = router;
