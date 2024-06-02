const { DataTypes } = require('sequelize');
const db = require('.././config/database');

const sequelize = db.sequelize;

const BatasKecamatan = sequelize.define('kecamatan2', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  data: {
    type: DataTypes.JSON,
  }
}, {
  tableName: 'kecamatan2',
  timestamps: false,
});

module.exports = BatasKecamatan;