const mongoose = require('mongoose');

class CrudService {
    /**
     * @param {mongoose.Model<any>} model Target Mongoose model
     */
    constructor(model) {
        this.model = model;
    }

    getAll(params) {
        try {
            const { offset = 0, limit = 20 } = params;
            return this.model
                .find({ deletedAt: null })
                .skip(+offset)
                .limit(+limit);
        } catch (err) {

        }
    }

    /**
     * @returns {Promise<Object>} Promise object represents the model
     */
    getOne(id) {
        try {
            const mongoId = mongoose.Types.ObjectId(id);
            return this.model
                .findOne({ _id: mongoId, deletedAt: null })
                .lean();
        } catch (err) {

        }
    }

    create(data) {
        try {
            return this.model.create(data);
        } catch (err) {

        }
    }

    update(id, data) {
        try {
            const mongoId = mongoose.Types.ObjectId(id);
            return this.model
                .updateOne({ _id: mongoId, deletedAt: null }, data);
        } catch (err) {

        }
    }

    delete(id) {
        try {
            const mongoId = mongoose.Types.ObjectId(id);
            return this.model.updateOne({ _id: mongoId }, { deletedAt: new Date() }).lean();
        } catch (err) {

        }
    }
}

module.exports = CrudService;
