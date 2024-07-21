// models/branchModel.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Branch = sequelize.define('Branch', {
  branchNo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  branchName: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  Address: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  areaMgrID: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = Branch;
