const express = require('express');
const router = express.Router();
const ProductController = require('../controller/ProductController')

router
    .get('/', ProductController.getAllProduct)
    .get('/:id', ProductController.getById)
    .patch('/:id', ProductController.updateById)
    .post('/', ProductController.create)
    .delete('/:id', ProductController.deleteById)

module.exports = router