const express = require('express');
const router = express.Router();
const AdminPageController = require('../controllers/adminPageController');

router.get('/', AdminPageController.getAdminPage);

module.exports = router;
