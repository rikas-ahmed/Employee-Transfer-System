// src/routes/rejectTransferRoutes.js

const express = require('express');
const router = express.Router();
const transferController = require('../controllers/rejectTransferController');

router.put('/reject/:id', transferController.rejectTransfer);

module.exports = router;
