const { DataTypes } = require('sequelize');
const db = require('.././config/database');

const sequelize = db.sequelize;

const BatasKelurahan = sequelize.define('kelurahan2', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data: {
    type: DataTypes.JSON,
  }
}, {
  tableName: 'kelurahan2',
  timestamps: false,
});

module.exports = BatasKelurahan;