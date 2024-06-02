const { DataTypes } = require('sequelize');
const db = require('.././config/database');

const sequelize = db.sequelize;

const BatasKota = sequelize.define('kota', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data: {
    type: DataTypes.JSON,
  }
}, {
  tableName: 'kota',
  timestamps: false,
});

module.exports = BatasKota;