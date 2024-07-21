const express = require('express');
const router = express.Router();
const FindEmployeeTransferController = require('../controllers/findEmployeeTransferController');

router.get('/', FindEmployeeTransferController.getAllEmployeeTransfers);
router.get('/:empNo', FindEmployeeTransferController.getEmployeeTransferById);
router.post('/', FindEmployeeTransferController.createEmployeeTransfer);
router.put('/:empNo', FindEmployeeTransferController.updateEmployeeTransfer);
router.delete('/:empNo', FindEmployeeTransferController.deleteEmployeeTransfer);

module.exports = router;
