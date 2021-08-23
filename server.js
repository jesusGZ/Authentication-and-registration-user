require('rootpath')();
require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(jwt());

app.use('/users', require('./users/users.controller'));

app.use(errorHandler);
console.log(process.env.PORT);

const port =  process.env.PORT;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});