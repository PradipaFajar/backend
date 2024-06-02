const { DataTypes } = require('sequelize');
const db = require('.././config/database');

const sequelize = db.sequelize;

const Sungai = sequelize.define('banjirmax42', {
    gid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    range_max: {
        type: DataTypes.STRING,
        allowNull: true
    },
    area: {
        type: DataTypes.STRING,
        allowNull: false
    },
    geom: {
        type: DataTypes.GEOMETRY,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    is_approved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    timestamps: false,
    tableName: 'banjirmax42'
});

module.exports = Sungai;