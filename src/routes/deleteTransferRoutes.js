const express = require('express');
const router = express.Router();
const deleteTransferController = require('../controllers/deleteTransferController');

router.get('/', deleteTransferController.getAllEmployees);
router.get('/:empNo', deleteTransferController.getEmployeeById);
router.get('/transfer/:empNo', deleteTransferController.getTransferRequestByEmpNo);
router.delete('/:empNo', deleteTransferController.deleteTransferRequest);

module.exports = router;
