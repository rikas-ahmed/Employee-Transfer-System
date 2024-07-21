const EmployeeBranch = require('../models/enterEmployeeBranchModel');

exports.getAllEmployeeBranches = async (req, res) => {
  try {
    const employeeBranches = await EmployeeBranch.findAll();
    res.status(200).json(employeeBranches);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getEmployeeBranchById = async (req, res) => {
  try {
    const employeeBranch = await EmployeeBranch.findOne({
      where: { empNo: req.params.empNo }
    });
    if (employeeBranch) {
      res.status(200).json(employeeBranch);
    } else {
      res.status(404).json({ message: 'Employee branch not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEmployeeBranch = async (req, res) => {
  try {
    const newEmployeeBranch = await EmployeeBranch.create(req.body);
    res.status(201).json(newEmployeeBranch);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateEmployeeBranch = async (req, res) => {
  try {
    const [updated] = await EmployeeBranch.update(req.body, {
      where: { empNo: req.params.empNo }
    });
    if (updated) {
      const updatedEmployeeBranch = await EmployeeBranch.findOne({
        where: { empNo: req.params.empNo }
      });
      res.status(200).json(updatedEmployeeBranch);
    } else {
      res.status(404).json({ message: 'Employee branch not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEmployeeBranch = async (req, res) => {
  try {
    const deleted = await EmployeeBranch.destroy({
      where: { empNo: req.params.empNo }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Employee branch not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
