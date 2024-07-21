const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const AreaManagerComments = sequelize.define('AreaManagerComments', {
  commentID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  empNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Employee',
      key: 'empNo'
    }
  },
  areaMgrID: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false
  },
  commentDate: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'AreaManagerComments',
  timestamps: true
});

module.exports = AreaManagerComments;
