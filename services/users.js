const mongoose = require('mongoose');
const CrudService = require('./crud');

class UserService extends CrudService {
    constructor(model) {
        super(model);
    }
}
module.exports = UserService;