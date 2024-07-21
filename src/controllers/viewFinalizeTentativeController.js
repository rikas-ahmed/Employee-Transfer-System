const FinalizeTentativeTransferSchedule = require('../models/viewFinalizeTentativeModel');

exports.getAllTransferSchedules = async (req, res) => {
  try {
    const transferSchedules = await FinalizeTentativeTransferSchedule.findAll();
    res.status(200).json(transferSchedules);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTransferScheduleById = async (req, res) => {
  try {
    const transferSchedule = await FinalizeTentativeTransferSchedule.findByPk(req.params.scheduleID);
    if (transferSchedule) {
      res.status(200).json(transferSchedule);
    } else {
      res.status(404).json({ message: 'Transfer schedule not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTransferSchedule = async (req, res) => {
  try {
    const newTransferSchedule = await FinalizeTentativeTransferSchedule.create(req.body);
    res.status(201).json(newTransferSchedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTransferSchedule = async (req, res) => {
  try {
    const [updated] = await FinalizeTentativeTransferSchedule.update(req.body, {
      where: { scheduleID: req.params.scheduleID }
    });
    if (updated) {
      const updatedTransferSchedule = await FinalizeTentativeTransferSchedule.findByPk(req.params.scheduleID);
      res.status(200).json(updatedTransferSchedule);
    } else {
      res.status(404).json({ message: 'Transfer schedule not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTransferSchedule = async (req, res) => {
  try {
    const deleted = await FinalizeTentativeTransferSchedule.destroy({
      where: { scheduleID: req.params.scheduleID }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Transfer schedule not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
