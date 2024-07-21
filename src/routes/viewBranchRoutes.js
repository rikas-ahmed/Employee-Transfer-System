const express = require('express');
const router = express.Router();
const viewBranchController = require('../controllers/viewBranchController');

router.get('/', viewBranchController.getAllBranches);

module.exports = router;
