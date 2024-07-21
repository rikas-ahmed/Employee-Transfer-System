const AreaManagerComments = require('../models/areaManagerModel');

exports.getAllComments = async (req, res) => {
  try {
    const comments = await AreaManagerComments.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCommentById = async (req, res) => {
  try {
    const comment = await AreaManagerComments.findByPk(req.params.commentID);
    if (comment) {
      res.status(200).json(comment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createComment = async (req, res) => {
  try {
    const newComment = await AreaManagerComments.create(req.body);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const [updated] = await AreaManagerComments.update(req.body, {
      where: { commentID: req.params.commentID }
    });
    if (updated) {
      const updatedComment = await AreaManagerComments.findByPk(req.params.commentID);
      res.status(200).json(updatedComment);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const deleted = await AreaManagerComments.destroy({
      where: { commentID: req.params.commentID }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
