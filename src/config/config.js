const env = require('./env');

module.exports = {
    "development": {
        "username": env.pg.user,
        "password": env.pg.password,
        "database": env.pg.database,
        "host": env.pg.host,
        "dialect": env.pg.dialect,
        "seederStorage": 'sequelize',
        "seederStorageTableName": "SequelizeSeed"
    },
    "test": {
        "username": env.pg.user,
        "password": env.pg.password,
        "database": env.pg.database,
        "host": env.pg.host,
        "dialect": env.pg.dialect,
        "seederStorage": 'sequelize',
        "seederStorageTableName": "SequelizeSeed"
    },
    "production": {
        "username": env.pg.user,
        "password": env.pg.password,
        "database": env.pg.database,
        "host": env.pg.host,
        "dialect": env.pg.dialect,
        "seederStorage": 'sequelize',
        "seederStorageTableName": "SequelizeSeed"
    }
}