const CrudController = require('./crud');

class PlatoonController extends CrudController {
    constructor(service) {
        super(service);
        this.registerRoutes();
    }
}

module.exports = PlatoonController;