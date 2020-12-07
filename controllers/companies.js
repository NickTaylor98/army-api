const CrudController = require('./crud');

class CompanyController extends CrudController {
    constructor(service) {
        super(service);
        this.registerRoutes();
    }
}

module.exports = CompanyController;