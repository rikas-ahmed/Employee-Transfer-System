const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branchController');

router.post('/insert', branchController.insertBranchDetails);
router.put('/update/:branchNo', branchController.updateBranchDetails);
router.get('/view/:branchNo', branchController.viewBranchDetails);
router.get('/viewAll', branchController.viewAllBranches);

module.exports = router;
