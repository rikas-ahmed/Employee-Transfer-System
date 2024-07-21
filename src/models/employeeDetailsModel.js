const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Employee = sequelize.define('Employee', {
  empNo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  empName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false
  },
  civilStatus: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  presentBranch: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  position: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  grade: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  appointmentDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'Employee',
  timestamps: false
});

module.exports = Employee;
