const Employee = require('../models/employeeDetailsModel');
const TransferRequest = require('../models/deleteTransferModel');

// Fetch all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: error.message });
  }
};

// Fetch employee by ID
exports.getEmployeeById = async (req, res) => {
  const { empNo } = req.params;
  try {
    const employee = await Employee.findOne({ where: { empNo } });
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    console.error(`Error fetching employee details for empNo ${empNo}:`, error);
    res.status(500).json({ error: `Error fetching employee details for empNo ${empNo}` });
  }
};

// Fetch transfer request by employee ID
exports.getTransferRequestByEmpNo = async (req, res) => {
  const { empNo } = req.params;
  try {
    const transferRequest = await TransferRequest.findOne({ where: { empNo } });
    if (transferRequest) {
      res.status(200).json(transferRequest);
    } else {
      res.status(404).json({ error: 'Transfer request not found' });
    }
  } catch (error) {
    console.error(`Error fetching transfer request for empNo ${empNo}:`, error);
    res.status(500).json({ error: `Error fetching transfer request for empNo ${empNo}` });
  }
};

// Delete transfer request
exports.deleteTransferRequest = async (req, res) => {
  const { empNo } = req.params;
  try {
    const deleted = await TransferRequest.destroy({ where: { empNo } });
    if (deleted) {
      res.status(200).json({ message: 'Transfer request deleted successfully' });
    } else {
      res.status(404).json({ error: 'Transfer request not found' });
    }
  } catch (error) {
    console.error('Error deleting transfer request:', error);
    res.status(500).json({ error: error.message });
  }
};
