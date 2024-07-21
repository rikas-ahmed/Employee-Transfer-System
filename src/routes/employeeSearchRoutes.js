const express = require('express');
const router = express.Router();
const employeeSearchController = require('../controllers/employeeSearchController');

router.get('/byName', employeeSearchController.searchByName);
router.get('/byNumber', employeeSearchController.searchByNumber);
router.get('/byCategory', employeeSearchController.searchByCategory);
router.get('/experienceGreaterThan', employeeSearchController.searchByExperienceGreaterThan);
router.get('/experienceLessThan', employeeSearchController.searchByExperienceLessThan);
router.get('/pastExperienceGreaterThan', employeeSearchController.searchByPastExperienceGreaterThan);
router.get('/pastExperienceLessThan', employeeSearchController.searchByPastExperienceLessThan);

module.exports = router;
