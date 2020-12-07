const CrudController = require('./crud');

class UserController extends CrudController {
    constructor(service) {
        super(service);
        this.registerRoutes();
    }
}

module.exports = UserController;