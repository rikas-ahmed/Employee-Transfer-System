const TransferRequest = require('../models/insertTransferModel');
const Employee = require('../models/employeeDetailsModel');

exports.getAllTransferRequests = async (req, res) => {
  try {
    const transferRequests = await TransferRequest.findAll();
    res.status(200).json(transferRequests);
  } catch (error) {
    console.error('Error fetching transfer requests:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.getTransferRequestById = async (req, res) => {
  try {
    const transferRequest = await TransferRequest.findByPk(req.params.reqId);
    if (transferRequest) {
      res.status(200).json(transferRequest);
    } else {
      res.status(404).json({ message: 'Transfer request not found' });
    }
  } catch (error) {
    console.error('Error fetching transfer request:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.createTransferRequest = async (req, res) => {
  try {
    const { empNo, cycleId, description, reqDate, title, type, lastRoutePosi, status, hrDecision, hrComment } = req.body;

    
    const employeeExists = await Employee.findByPk(empNo);
    if (!employeeExists) {
      return res.status(400).json({ message: 'Employee does not exist' });
    }

    
    const existingRequest = await TransferRequest.findOne({ where: { empNo, cycleId } });
    if (existingRequest) {
      return res.status(400).json({ message: 'Transfer request already exists for this employee and cycle' });
    }

    const newTransferRequest = await TransferRequest.create({ empNo, cycleId, description, reqDate, title, type, lastRoutePosi, status, hrDecision, hrComment });
    res.status(201).json(newTransferRequest);
  } catch (error) {
    console.error('Error creating transfer request:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.updateTransferRequest = async (req, res) => {
  try {
    const [updated] = await TransferRequest.update(req.body, {
      where: { empNo: req.params.empNo, cycleId: req.params.cycleId }
    });
    if (updated) {
      const updatedTransferRequest = await TransferRequest.findOne({ where: { empNo: req.params.empNo, cycleId: req.params.cycleId } });
      res.status(200).json(updatedTransferRequest);
    } else {
      res.status(404).json({ message: 'Transfer request not found' });
    }
  } catch (error) {
    console.error('Error updating transfer request:', error);
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTransferRequest = async (req, res) => {
  try {
    const deleted = await TransferRequest.destroy({
      where: { empNo: req.params.empNo, cycleId: req.params.cycleId }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Transfer request not found' });
    }
  } catch (error) {
    console.error('Error deleting transfer request:', error);
    res.status(500).json({ error: error.message });
  }
};
