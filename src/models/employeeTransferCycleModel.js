const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const TransferCycle = sequelize.define('TransferCycle', {
  cycleID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  closeDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'TransferCycle',
  timestamps: false
});

module.exports = TransferCycle;
