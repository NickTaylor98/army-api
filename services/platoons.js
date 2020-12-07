const mongoose = require('mongoose');
const CrudService = require('./crud');

class PlatoonService extends CrudService {
    constructor(model) {
        super(model);
    }

    async getSoldiers(id) {
        try {
            const mongoId = mongoose.Types.ObjectId(id);
            return this.model.findOne({_id: mongoId})
                .select('_id soldiers')
                .populate('soldiers')
                .lean();
        } catch (err) {

        }
    }

}
module.exports = PlatoonService;