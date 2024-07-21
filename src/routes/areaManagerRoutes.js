const express = require('express');
const router = express.Router();
const AreaManagerCommentsController = require('../controllers/areaManagerController');

router.get('/', AreaManagerCommentsController.getAllComments);
router.get('/:commentID', AreaManagerCommentsController.getCommentById);
router.post('/', AreaManagerCommentsController.createComment);
router.put('/:commentID', AreaManagerCommentsController.updateComment);
router.delete('/:commentID', AreaManagerCommentsController.deleteComment);

module.exports = router;
