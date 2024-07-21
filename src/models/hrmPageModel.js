const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const HRMPage = sequelize.define('HRMPage', {
  hrmId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hrmName: {
    type: DataTypes.STRING,
    allowNull: false
  },

}, {
  tableName: 'HRMPage',
  timestamps: false
});

module.exports = HRMPage;
