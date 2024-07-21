const express = require('express');
const router = express.Router();
const FinalizeTentativeTransferScheduleController = require('../controllers/viewFinalizeTentativeController');

router.get('/', FinalizeTentativeTransferScheduleController.getAllTransferSchedules);
router.get('/:scheduleID', FinalizeTentativeTransferScheduleController.getTransferScheduleById);
router.post('/', FinalizeTentativeTransferScheduleController.createTransferSchedule);
router.put('/:scheduleID', FinalizeTentativeTransferScheduleController.updateTransferSchedule);
router.delete('/:scheduleID', FinalizeTentativeTransferScheduleController.deleteTransferSchedule);

module.exports = router;
