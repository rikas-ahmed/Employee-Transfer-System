const { DataTypes } = require('sequelize');
const sequelize = require('../database/db'); 

const TransferRequest = sequelize.define('TransferRequest', {
  empNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Employees',
      key: 'empNo'
    },
    primaryKey: true
  },
  Description: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  reqDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Title: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  Type: {
    type: DataTypes.STRING(50),
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
    type: DataTypes.STRING(255),
    allowNull: true
  },
  hrComment: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'TransferRequest',
  timestamps: false
});

module.exports = TransferRequest;
