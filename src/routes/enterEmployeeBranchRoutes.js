const express = require('express');
const router = express.Router();
const EmployeeBranchController = require('../controllers/enterEmployeeBranchController');

router.get('/', EmployeeBranchController.getAllEmployeeBranches);
router.get('/:empNo', EmployeeBranchController.getEmployeeBranchById);
router.post('/', EmployeeBranchController.createEmployeeBranch);
router.put('/:empNo', EmployeeBranchController.updateEmployeeBranch);
router.delete('/:empNo', EmployeeBranchController.deleteEmployeeBranch);

module.exports = router;
