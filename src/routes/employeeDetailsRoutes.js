const express = require('express');
const router = express.Router();
const employeeDetailsController = require('../controllers/employeeDetailsController');

router.post('/insert', employeeDetailsController.insertEmployeeDetails);
router.put('/update/:empNo', employeeDetailsController.updateEmployeeDetails);
router.get('/view/:empNo', employeeDetailsController.viewEmployeeDetails);
router.get('/', employeeDetailsController.getAllEmployees); 

module.exports = router;
