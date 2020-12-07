const mongoose = require('mongoose');
const CrudService = require('./crud');

class CompanyService extends CrudService {
    constructor(model) {
        super(model);
    }

    async getPlatoons(id) {
        try {
            const mongoId = mongoose.Types.ObjectId(id);
            return this.model.findById(mongoId)
                .select('_id platoons')
                .populate('platoons')
                .lean();
        } catch (err) {

        }
    }

}
module.exports = CompanyService;