const mongoose = require('mongoose');

module.exports.connectDb = async ({host, port, name}) => {
    try {
        await mongoose.connect(`mongodb://${host}:${port}/${name}`, {useNewUrlParser: true});
        console.log('Connection to database successfully');
    } catch (err) {
        console.error('Error in connection to database');
    }
}

