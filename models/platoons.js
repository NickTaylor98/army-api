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
        soldiers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }],
        deletedAt: {
            type: Date,
        },
    });
    return mongoose.models.Platoon || mongoose.model('Platoon', schema);
}