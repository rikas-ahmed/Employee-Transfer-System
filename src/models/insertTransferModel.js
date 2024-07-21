const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const TransferRequest = sequelize.define('TransferRequest', {
  empNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Employee',
      key: 'empNo'
    },
    primaryKey: true 
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  reqDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastRoutePosi: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  status: {
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
    allowNull: false
  },
  hrComment: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'TransferRequest',
  timestamps: false
});

module.exports = TransferRequest;
