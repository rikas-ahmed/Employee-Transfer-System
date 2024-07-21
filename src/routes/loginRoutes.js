const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/loginController');

router.post('/', AuthController.login);

module.exports = router;
