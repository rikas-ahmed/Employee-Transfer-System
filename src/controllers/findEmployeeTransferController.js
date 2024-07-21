const FindEmployeeTransfer = require('../models/findEmployeeTransferModel');

exports.getAllEmployeeTransfers = async (req, res) => {
  try {
    const employeeTransfers = await FindEmployeeTransfer.findAll();
    res.status(200).json(employeeTransfers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEmployeeTransferById = async (req, res) => {
  try {
    const employeeTransfer = await FindEmployeeTransfer.findByPk(req.params.empNo);
    if (employeeTransfer) {
      res.status(200).json(employeeTransfer);
    } else {
      res.status(404).json({ message: 'Employee transfer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEmployeeTransfer = async (req, res) => {
  try {
    const newEmployeeTransfer = await FindEmployeeTransfer.create(req.body);
    res.status(201).json(newEmployeeTransfer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEmployeeTransfer = async (req, res) => {
  try {
    const [updated] = await FindEmployeeTransfer.update(req.body, {
      where: { empNo: req.params.empNo }
    });
    if (updated) {
      const updatedEmployeeTransfer = await FindEmployeeTransfer.findByPk(req.params.empNo);
      res.status(200).json(updatedEmployeeTransfer);
    } else {
      res.status(404).json({ message: 'Employee transfer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEmployeeTransfer = async (req, res) => {
  try {
    const deleted = await FindEmployeeTransfer.destroy({
      where: { empNo: req.params.empNo }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Employee transfer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
