const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const AdminPage = sequelize.define('AdminPage', {
  adminId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  adminName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
}, {
  tableName: 'AdminPage',
  timestamps: false
});

module.exports = AdminPage;
