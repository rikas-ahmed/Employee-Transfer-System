const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db'); 

const Dependent = sequelize.define('Dependent', {
  empNo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  depNo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  depName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gender: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  dob: {
    type: DataTypes.DATE,
    allowNull: false
  },
  relationship: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'Dependent'
});

module.exports = Dependent;
