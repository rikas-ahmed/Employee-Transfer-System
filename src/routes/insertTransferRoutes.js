const express = require('express');
const router = express.Router();
const TransferRequestController = require('../controllers/insertTransferController');

router.get('/', TransferRequestController.getAllTransferRequests);
router.get('/:reqId', TransferRequestController.getTransferRequestById);
router.post('/', TransferRequestController.createTransferRequest);
router.put('/:reqId', TransferRequestController.updateTransferRequest);
router.delete('/:reqId', TransferRequestController.deleteTransferRequest);

module.exports = router;
