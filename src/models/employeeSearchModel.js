const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Employee = sequelize.define('Employee', {
  empNo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  empName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Address: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  Gender: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  Dob: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  civilStatus: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  presentBranch: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  Position: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  Grade: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  Category: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  appointmentDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'Employee',
});

module.exports = Employee;
