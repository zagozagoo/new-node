const express = require('express');
const router = express.Router();
const Person = require('../models/Person');
const PersonController = require('../controller/PersonController')

router
    .get('/', PersonController.getAllPeople)
    .get('/:id', PersonController.getById)
    .post('/', PersonController.create)
    .patch('/:id', PersonController.updateById)
    .delete('/:id', PersonController.deleteById)

module.exports = router