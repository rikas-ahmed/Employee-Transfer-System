const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const FinalizeTentativeTransferSchedule = sequelize.define('FinalizeTentativeTransferSchedule', {
  scheduleID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cycleID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'EmployeeTransferCycle',
      key: 'cycleID'
    }
  },
  empNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'EmployeeDetails',
      key: 'empNo'
    }
  },
  fromBranch: {
    type: DataTypes.STRING,
    allowNull: false
  },
  toBranch: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tentativeDate: {
    type: DataTypes.DATE,
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
  tableName: 'FinalizeTentativeTransferSchedule',
  timestamps: false
});

module.exports = FinalizeTentativeTransferSchedule;
