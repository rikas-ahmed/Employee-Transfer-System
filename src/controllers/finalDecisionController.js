const FinalDecision = require('../models/finalDecisionModel');

exports.getAllDecisions = async (req, res) => {
  try {
    const decisions = await FinalDecision.findAll();
    res.status(200).json(decisions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDecisionById = async (req, res) => {
  try {
    const decision = await FinalDecision.findByPk(req.params.decisionID);
    if (decision) {
      res.status(200).json(decision);
    } else {
      res.status(404).json({ message: 'Decision not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createDecision = async (req, res) => {
  try {
    const newDecision = await FinalDecision.create(req.body);
    res.status(201).json(newDecision);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDecision = async (req, res) => {
  try {
    const [updated] = await FinalDecision.update(req.body, {
      where: { decisionID: req.params.decisionID }
    });
    if (updated) {
      const updatedDecision = await FinalDecision.findByPk(req.params.decisionID);
      res.status(200).json(updatedDecision);
    } else {
      res.status(404).json({ message: 'Decision not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDecision = async (req, res) => {
  try {
    const deleted = await FinalDecision.destroy({
      where: { decisionID: req.params.decisionID }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Decision not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
