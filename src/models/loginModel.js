const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const UserLogin = sequelize.define('UserLogin', {
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  empNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'EmployeeDetails',
      key: 'empNo'
    }
  },
  Privilege: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'UserLogin',
  timestamps: false
});

module.exports = UserLogin;
