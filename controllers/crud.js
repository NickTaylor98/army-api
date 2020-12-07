const express = require('express');
const CrudService = require('../services/crud');

const wrap = fn => (req, res, next) => fn(req, res, next).catch(next);
class CrudController {
    /**
     * @param {CrudService} service Target API service
     */
    constructor(service) {
        this.service = service;

        this.readAll = this.readAll.bind(this);
        this.read = this.read.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);

        this.router = express.Router({
            mergeParams: true
        });
        this.routes = {
            '/': [
                { method: 'get', cb: this.readAll },
                { method: 'post', cb: this.create },
            ],
            '/:id': [
                { method: 'get', cb: this.read },
                { method: 'put', cb: this.update },
                { method: 'delete', cb: this.delete },
            ]
        };
    }

    async readAll(req, res) {
        const data = await this.service.getAll(req.query);
        res.json(data);
    }

    async read(req, res) {
        const data = await this.service.getOne(req.params.id);
        res.json(data);
    }

    async create(req, res) {
        let data = await this.service.create(req.body);
        res.status(201).json(data);
    }

    async update(req, res) {
        let data = await this.service.update(req.params.id, req.body);
        res.json(data);
    }

    async delete(req, res) {
        let data = await this.service.delete(req.params.id);
        res.json(data);
    }


    registerRoutes() {
        Object.keys(this.routes).forEach(route => {
            const handlers = this.routes[route];
            if (!handlers || !Array.isArray(handlers)) {
                return;
            }
            for (const handler of handlers) {
                this.router[handler.method](route, wrap(handler.cb));
            }
        });
    }
}

module.exports = CrudController;