const { Sequelize } = require('sequelize');
const env = require('./env')

module.exports = db = {}

const sequelize = new Sequelize(
    env.pg.database,
    env.pg.user,
    env.pg.password,
    {
        host: env.pg.host,
        port: env.pg.port,
        dialect: env.pg.dialect,
        logging: true,
    }
);

db.sequelize = sequelize;

sequelize
    .authenticate()
    .then(() => console.log('Connected to pg DB ' + env.pg.database + ' ' + env.pg.user))
    .catch((err) => {
        console.error('Error when try to connect DB : ', err.message)
    })