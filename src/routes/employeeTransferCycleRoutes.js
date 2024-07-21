const express = require('express');
const router = express.Router();
const transferCycleController = require('../controllers/employeeTransferCycleController');

router.post('/insert', transferCycleController.insertTransferCycle);
router.put('/update/:cycleID', transferCycleController.updateTransferCycle);
router.get('/view/:cycleID', transferCycleController.viewTransferCycle);
router.get('/', transferCycleController.getAllTransferCycles);

module.exports = router;
