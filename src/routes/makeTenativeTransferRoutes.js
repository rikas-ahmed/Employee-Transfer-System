const express = require('express');
const router = express.Router();
const TentativeTransferScheduleController = require('../controllers/makeTenativeTransferController');

router.get('/', TentativeTransferScheduleController.getAllTransferSchedules);
router.get('/:scheduleID', TentativeTransferScheduleController.getTransferScheduleById);
router.post('/', TentativeTransferScheduleController.createTransferSchedule);
router.put('/:scheduleID', TentativeTransferScheduleController.updateTransferSchedule);
router.delete('/:scheduleID', TentativeTransferScheduleController.deleteTransferSchedule);

module.exports = router;
