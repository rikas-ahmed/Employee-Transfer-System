const Employee = require('../models/employeeSearchModel');
const EmployeeBranchHistory = require('../models/employeeBranchHistoryModel');
const { Sequelize } = require('sequelize');

// Search by employee name
exports.searchByName = async (req, res) => {
  console.log('searchByName called with:', req.query);
  const { name } = req.query;
  try {
    const employees = await Employee.findAll({
      where: {
        empName: {
          [Sequelize.Op.like]: `%${name}%`
        }
      }
    });
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error searching by name:', error);
    res.status(500).json({ error: error.message });
  }
};

// Search by employee number
exports.searchByNumber = async (req, res) => {
  console.log('searchByNumber called with:', req.query);
  const { number } = req.query;
  try {
    const employees = await Employee.findAll({
      where: {
        empNo: number
      }
    });
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error searching by number:', error);
    res.status(500).json({ error: error.message });
  }
};

// Search by employee category
exports.searchByCategory = async (req, res) => {
  console.log('searchByCategory called with:', req.query);
  const { category } = req.query;
  try {
    const employees = await Employee.findAll({
      where: {
        Category: category
      }
    });
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error searching by category:', error);
    res.status(500).json({ error: error.message });
  }
};

// Search by experience greater than
exports.searchByExperienceGreaterThan = async (req, res) => {
  console.log('searchByExperienceGreaterThan called with:', req.query);
  const { years } = req.query;
  try {
    const employees = await Employee.findAll({
      where: Sequelize.where(
        Sequelize.fn('DATEDIFF', Sequelize.fn('NOW'), Sequelize.col('startDate')),
        {
          [Sequelize.Op.gt]: years * 365
        }
      )
    });
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error searching by experience:', error);
    res.status(500).json({ error: error.message });
  }
};

// Search by experience less than
exports.searchByExperienceLessThan = async (req, res) => {
  console.log('searchByExperienceLessThan called with:', req.query);
  const { years } = req.query;
  try {
    const employees = await Employee.findAll({
      where: Sequelize.where(
        Sequelize.fn('DATEDIFF', Sequelize.fn('NOW'), Sequelize.col('startDate')),
        {
          [Sequelize.Op.lt]: years * 365
        }
      )
    });
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error searching by experience:', error);
    res.status(500).json({ error: error.message });
  }
};

// Search by past experience greater than
exports.searchByPastExperienceGreaterThan = async (req, res) => {
  console.log('searchByPastExperienceGreaterThan called with:', req.query);
  const { years } = req.query;
  try {
    const employees = await EmployeeBranchHistory.findAll({
      where: Sequelize.where(
        Sequelize.fn('TIMESTAMPDIFF', Sequelize.literal('YEAR'), Sequelize.col('startDate'), Sequelize.col('endDate')),
        {
          [Sequelize.Op.gt]: years
        }
      ),
      include: [Employee]
    });
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error searching by past experience:', error);
    res.status(500).json({ error: error.message });
  }
};

// Search by past experience less than
exports.searchByPastExperienceLessThan = async (req, res) => {
  console.log('searchByPastExperienceLessThan called with:', req.query);
  const { years } = req.query;
  try {
    const employees = await EmployeeBranchHistory.findAll({
      where: Sequelize.where(
        Sequelize.fn('TIMESTAMPDIFF', Sequelize.literal('YEAR'), Sequelize.col('startDate'), Sequelize.col('endDate')),
        {
          [Sequelize.Op.lt]: years
        }
      ),
      include: [Employee]
    });
    res.status(200).json(employees);
  } catch (error) {
    console.error('Error searching by past experience:', error);
    res.status(500).json({ error: error.message });
  }
};
