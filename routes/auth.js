const express = require('express');
const AuthController = require('../controller/Auth');
const router = express.Router();

router
    .post('/register', AuthController.register)
    .post('/login', AuthController.login)
    .delete('/delete/:id',)

module.exports = router; 