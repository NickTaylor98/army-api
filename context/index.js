const mongoose = require('mongoose');

const {database} = require('../config');
const {connectDb} = require('../helpers/db-helper');

connectDb(database);

const User = require('../models/users')(mongoose);
const Platoon = require('../models/platoons')(mongoose);
const Company = require('../models/companies')(mongoose);

module.exports = {User, Platoon, Company};
