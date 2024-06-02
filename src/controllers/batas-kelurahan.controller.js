const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const moment = require('moment')

const db = require('.././config/database');

const sequelize = db.sequelize;

const Kelurahan = require('../models/batas-kel');
const { RESPONSE_MESSAGE } = require('../helpers/contants');

const controller = {};

controller.getBatasKelurahan = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Kelurahan.findOne({
      where: {
        id: id
      }
    });

    if (!data) {
      return res.API.error(RESPONSE_MESSAGE.not_found)
    }

    return res.API.success(data, 200)
  } catch (error) {
    return res.API.error(error.message)
  }
};

module.exports = controller;