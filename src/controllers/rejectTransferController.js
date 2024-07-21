const TransferRequest = require('../models/rejectTransferModel');
const Employee = require('../models/employeeDetailsModel');

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

// Update transfer request status to "Rejected"
exports.rejectTransferRequest = async (req, res) => {
  const { empNo } = req.params;
  const { hrDecision, hrComment } = req.body;
  try {
    const [updated] = await TransferRequest.update(
      { hrDecision, hrComment, Status: 'Rejected' },
      { where: { empNo } }
    );
    if (updated) {
      const updatedTransfer = await TransferRequest.findOne({ where: { empNo } });
      res.status(200).json(updatedTransfer);
    } else {
      throw new Error('Transfer request not found');
    }
  } catch (error) {
    console.error('Error rejecting transfer request:', error);
    res.status(500).json({ error: error.message });
  }
};
