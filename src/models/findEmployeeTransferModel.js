const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const FindEmployeeTransfer = sequelize.define('FindEmployeeTransfer', {
  empNo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'EmployeeDetails',
      key: 'empNo'
    }
  },
  transferDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fromBranch: {
    type: DataTypes.STRING,
    allowNull: false
  },
  toBranch: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  comments: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'FindEmployeeTransfer',
  timestamps: false
});

module.exports = FindEmployeeTransfer;
