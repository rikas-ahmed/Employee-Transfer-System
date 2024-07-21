const express = require('express');
const router = express.Router();
const dependentsController = require('../controllers/dependentsController');

router.post('/insert', dependentsController.insertDependentDetails);
router.put('/update/:depNo', dependentsController.updateDependentDetails);
router.get('/view/:depNo', dependentsController.viewDependentDetails);

module.exports = router;
