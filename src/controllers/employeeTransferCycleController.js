const TransferCycle = require('../models/employeeTransferCycleModel');

exports.insertTransferCycle = async (req, res) => {
  try {
    const transferCycle = await TransferCycle.create(req.body);
    res.status(201).json(transferCycle);
  } catch (error) {
    console.error('Error inserting transfer cycle:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.updateTransferCycle = async (req, res) => {
  const { cycleID } = req.params;
  try {
    const [updated] = await TransferCycle.update(req.body, {
      where: { cycleID: cycleID }
    });
    if (updated) {
      const updatedCycle = await TransferCycle.findOne({ where: { cycleID: cycleID } });
      res.status(200).json(updatedCycle);
    } else {
      throw new Error('Transfer cycle not found');
    }
  } catch (error) {
    console.error('Error updating transfer cycle:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.viewTransferCycle = async (req, res) => {
  const { cycleID } = req.params;
  try {
    const transferCycle = await TransferCycle.findOne({ where: { cycleID: cycleID } });
    if (transferCycle) {
      res.status(200).json(transferCycle);
    } else {
      res.status(404).json({ error: 'Transfer cycle not found' });
    }
  } catch (error) {
    console.error('Error fetching transfer cycle details:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.getAllTransferCycles = async (req, res) => {
  try {
    const transferCycles = await TransferCycle.findAll();
    res.status(200).json(transferCycles);
  } catch (error) {
    console.error('Error fetching transfer cycles:', error);
    res.status(500).json({ error: error.message });
  }
};
