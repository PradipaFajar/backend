const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const moment = require('moment')

const db = require('.././config/database');

const sequelize = db.sequelize;

const Sungai = require('../models/sungai-ar-25k');
const { RESPONSE_MESSAGE } = require('../helpers/contants');

const controller = {};

controller.getAllData = async (req, res) => {
    try {
        const data = await Sungai.findAll({
            attributes: ['gid', 'name', 'range_max', 'date', 'is_approved']
        })

        return res.API.success(data, 201);
    } catch (error) {
        console.log(error);
        return res.API.error(RESPONSE_MESSAGE.internal_error);
    }
}

controller.getGeoJSON = async (req, res) => {
    const data = await sequelize.query('Select ST_AsGeoJSON(geom) from simple', { type: QueryTypes.SELECT});
    // const data = await Sungai.find
    console.log(data);
    return res.API.success(data, 200)
}

controller.getGeomByName = async (req, res) => {
    const { sungai } = req.query;

    const data = await Sungai.findOne({
        where: {
            namobj: sungai
        },
        attributes: ['gid', 'geom']
    })

    if (!data) {
        return res.API.error(RESPONSE_MESSAGE.not_found)
    }
    // console.log(data)
    return res.API.success(data, 200)
}

controller.getGeomById = async (req, res) => {
    try {
        const { id } = req.params;

    const data = await Sungai.findOne({
        where: {
            gid: id
        },
        attributes: ['geom']
    })

    if (!data) {
        return res.API.error(RESPONSE_MESSAGE.not_found)
    }

    return res.API.success(data, 200)
    } catch (error) {
        console.log(error)
        return res.API.error(RESPONSE_MESSAGE.internal_error)
    }
}

controller.getGeomByDateApproved = async (req, res) => {
    try {
        // get input from query params, exmple = localhost:3030/api/getGeom?date=value   [?date=] is the query params
        const { q } = req.query;

        const data = await Sungai.findOne({
            // find data where date = choosen date
            where: {
                date: moment(q).add(7, 'hours'),
                is_approved: true
            },
            // choose which column want to serve
            attributes: ['geom']
        })

        // if no data found, return error
        if (!data) {
            return res.API.error(RESPONSE_MESSAGE.not_found)
        }

        // if data exist return data
        return res.API.success(data, 200)
    } catch (error) {
        console.log(error)
        return res.API.error(RESPONSE_MESSAGE.internal_error)
    }
}

controller.getGeomByDateApprovedTable = async (req, res) => {
    try {
        // get input from query params, exmple = localhost:3030/api/getGeom?date=value   [?date=] is the query params
        const { q } = req.query;

        const data = await Sungai.findAll({
            // find data where date = choosen date
            where: {
                date: moment(q).add(7, 'hours'),
                is_approved: true
            },
            // choose which column want to serve
            attributes: ['gid', 'name', 'range_max', 'date', 'is_approved']
        })

        // if data exist return data
        return res.API.success(data, 200)
    } catch (error) {
        console.log(error)
        return res.API.error(RESPONSE_MESSAGE.internal_error)
    }
}

controller.getGeomByDate = async (req, res) => {
    try {
        // get input from query params, exmple = localhost:3030/api/getGeom?date=value   [?date=] is the query params
        const { q } = req.query;

        const data = await Sungai.findOne({
            // find data where date = choosen date
            where: {
                date: moment(q).add(7, 'hours'),
            },
            // choose which column want to serve
            attributes: ['geom']
        })

        // if no data found, return error
        if (!data) {
            return res.API.error(RESPONSE_MESSAGE.not_found)
        }

        // if data exist return data
        return res.API.success(data, 200)
    } catch (error) {
        console.log(error)
        return res.API.error(RESPONSE_MESSAGE.internal_error)
    }
}

controller.approveGeomByDate = async (req, res) => {
    try {
        // get input from query params, exmple = localhost:3030/api/getGeom?date=value   [?date=] is the query params
        const { id } = req.query;

        const data = await Sungai.findOne({
            // find data where date = choosen date
            where: {
                gid : id,
                is_approved: false
            }
        })

        // if no data found, return error
        if (!data) {
            return res.API.error(RESPONSE_MESSAGE.not_found)
        }

        await Sungai.update({
            is_approved: true
        }, {
            where: {
                gid: id,
                is_approved: false
            }
        })

        // if data exist return data
        return res.API.success(RESPONSE_MESSAGE.success, 201)
    } catch (error) {
        console.log(error)
        return res.API.error(RESPONSE_MESSAGE.internal_error)
    }
}

controller.unApproveGeomByDate = async (req, res) => {
    try {
        // get input from query params, exmple = localhost:3030/api/getGeom?date=value   [?date=] is the query params
        const { id } = req.query;

        const data = await Sungai.findOne({
            // find data where date = choosen date
            where: {
                gid: id,
                is_approved: true
            }
        })

        // if no data found, return error
        if (!data) {
            return res.API.error(RESPONSE_MESSAGE.not_found)
        }

        await Sungai.update({
            is_approved: false
        }, {
            where: {
                gid: id,
                is_approved: true
            }
        })

        // if data exist return data
        return res.API.success(RESPONSE_MESSAGE.success, 201)
    } catch (error) {
        console.log(error)
        return res.API.error(RESPONSE_MESSAGE.internal_error)
    }
}

controller.deleteById = async (req, res) => {
    try {
        const { id } = req.params;

        const isExist = await Sungai.findOne({
            where: {
                gid: id
            },
            attributes: ['gid']
        })

        if (!isExist) {
            return res.API.error(RESPONSE_MESSAGE.not_found)
        }

        await Sungai.destroy({
            where: {
                gid: id
            }
        })

        return res.API.success(RESPONSE_MESSAGE.success, 201)
    } catch (error) {
        console.log(error);
        return res.API.error(RESPONSE_MESSAGE.internal_error)
    }
}

module.exports = controller;