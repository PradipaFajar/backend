const { DataTypes } = require('sequelize');
const db = require('.././config/database');

const sequelize = db.sequelize;

const KalaUlang1 = sequelize.define('kalul1', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data: {
    type: DataTypes.JSON,
  }
}, {
  tableName: 'kalul1',
  timestamps: false,
});

module.exports = KalaUlang1;