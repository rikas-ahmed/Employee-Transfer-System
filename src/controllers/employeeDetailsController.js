const Employee = require('../models/employeeDetailsModel');

// Insert new employee details
exports.insertEmployeeDetails = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json(employee);
  } catch (error) {
    console.error('Error inserting employee details:', error);
    res.status(500).json({ error: error.message });
  }
};

// Update employee details
exports.updateEmployeeDetails = async (req, res) => {
  const { empNo } = req.params;
  try {
    const [updated] = await Employee.update(req.body, {
      where: { empNo: empNo }
    });
    if (updated) {
      const updatedEmployee = await Employee.findOne({ where: { empNo: empNo } });
      res.status(200).json(updatedEmployee);
    } else {
      throw new Error('Employee not found');
    }
  } catch (error) {
    console.error('Error updating employee details:', error);
    res.status(500).json({ error: error.message });
  }
};

// View employee details
exports.viewEmployeeDetails = async (req, res) => {
  const { empNo } = req.params;
  try {
    const employee = await Employee.findOne({ where: { empNo: empNo } });
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    console.error('Error fetching employee details:', error);
    res.status(500).json({ error: error.message });
  }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error fetching employees:', error);
    res.status(500).json({ error: error.message });
  }
};


