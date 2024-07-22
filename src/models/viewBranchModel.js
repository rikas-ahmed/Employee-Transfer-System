const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Branch = sequelize.define('Branch', {
  branchNo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  branchName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  areaMgrID: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Branch',
  timestamps: false
});

module.exports = Branch;
