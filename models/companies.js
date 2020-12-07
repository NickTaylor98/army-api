module.exports = (mongoose) => {
    const schema = mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        commander: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        platoons: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Platoon',
        }],
        deletedAt: {
            type: Date,
        },
    });
    return mongoose.models.Company || mongoose.model('Company', schema);
}