const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Employee = require('./employeeSearchModel');

const EmployeeBranchHistory = sequelize.define('EmployeeBranchHistory', {
  empNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Employee,
      key: 'empNo'
    }
  },
  branchNo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'employeebranchhistory' 
});

Employee.hasMany(EmployeeBranchHistory, { foreignKey: 'empNo' });
EmployeeBranchHistory.belongsTo(Employee, { foreignKey: 'empNo' });

module.exports = EmployeeBranchHistory;
