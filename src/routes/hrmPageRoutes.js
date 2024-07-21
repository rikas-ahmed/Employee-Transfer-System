const express = require('express');
const router = express.Router();
const HRMPageController = require('../controllers/hrmPageController');

router.get('/', HRMPageController.getHRMPage);

module.exports = router;
