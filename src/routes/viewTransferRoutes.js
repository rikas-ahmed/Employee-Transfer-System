const express = require('express');
const router = express.Router();
const viewTransferController = require('../controllers/viewTransferController');

router.get('/', viewTransferController.getAllTransferRequests);
router.get('/:empNo', viewTransferController.getTransferRequestByEmpNo);  //?
router.post('/reject/:empNo', viewTransferController.rejectTransferRequest); //no need

module.exports = router;
