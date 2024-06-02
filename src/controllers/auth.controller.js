const { RESPONSE_MESSAGE } = require('../helpers/contants');

const controller = {};

controller.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username)
        console.log(password)
        const credentials = {
            username: 'admin',
            password: '123456'
        }

        if (username != credentials.username || password != credentials.password) {
            return res.API.error(RESPONSE_MESSAGE.invalid_password, 402)
        }

        const data = {
            username: username,
            login: 'OK'
        }

        return res.API.success(data, 201)
    } catch (error) {
        console.log(error)
        return res.API.error(RESPONSE_MESSAGE.internal_error)
    }
}

module.exports = controller;