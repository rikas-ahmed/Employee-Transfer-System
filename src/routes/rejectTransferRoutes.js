const express = require('express');
const router = express.Router();
const rejectTransferController = require('../controllers/rejectTransferController');

router.get('/', rejectTransferController.getAllEmployees);
router.get('/:empNo', rejectTransferController.getEmployeeById);
router.post('/update/:empNo', rejectTransferController.rejectTransferRequest);

module.exports = router;
