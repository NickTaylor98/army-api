module.exports = (mongoose) => {
    const schema = mongoose.Schema({
        username: {
            type: String,
            lowercase: true,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            minLength: 6,
            maxLength: 20,
            select: false,
        },
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
        fatherName: {
            type: String,
            required: false,
        },
        birthday: {
            type: Date,
            required: true,
        },
        type: {
            type: Number,
            required: true,
        },
        status: {
            type: Number,
            required: false,
        },
        deletedAt: {
            type: Date,
        },
    });
    return mongoose.models.User || mongoose.model('User', schema);
}