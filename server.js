const config = require('./config');
const { port } = config.server;

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const services = require('./services');
const controllers = require('./controllers');
/**
 * @param { {User, Platoon, Company} } models All Mongoose models of the project
 */
module.exports = (models) => {

    const userService = new services.UserService(models.User);
    const platoonService = new services.PlatoonService(models.Platoon);
    const companyService = new services.CompanyService(models.Company);

    const userController = new controllers.UserController(userService);
    const platoonController = new controllers.PlatoonController(platoonService);
    const companyController = new controllers.CompanyController(companyService);

    const app = express();

    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/users', userController.router);
    app.use('/companies', companyController.router);
    app.use('/platoons', platoonController.router);

    app.listen(port);
    return app;
};