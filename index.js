const express = require('express');
const config = require('./config');
const port = config.server.port;


const app = express();
app.listen(port);