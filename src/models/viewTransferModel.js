const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');
const Employee = require('./employeeDetailsModel');

const TransferRequest = sequelize.define('TransferRequest', {
  empNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Employee,
      key: 'empNo'
    },
    primaryKey: true
  },
  Description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  reqDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastRoutePosi: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  Status: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  cycleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  hrDecision: {
    type: DataTypes.STRING,
    allowNull: true
  },
  hrComment: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: false,
  tableName: 'TransferRequest'
});

module.exports = TransferRequest;
