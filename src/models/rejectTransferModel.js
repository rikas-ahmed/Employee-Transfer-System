const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const TransferRequest = sequelize.define('TransferRequest', {
  empNo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
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
    allowNull: false
  },
  hrDecision: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  hrComment: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  tableName: 'TransferRequest',
  timestamps: false
});

module.exports = TransferRequest;
