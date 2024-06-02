const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { json, urlencoded } = require('body-parser');

const Router = require('./routes/index.router');
const env = require('./config/env');
const response = require('./helpers/response');

const app = express();

app.use(helmet());
app.use(cors({credentials: true, origin: true}));
app.use(json());
app.use(response);
app.use('/api', Router)

app.listen(env.port, function() {
    console.log('Server is running on port ', env.port);
})
