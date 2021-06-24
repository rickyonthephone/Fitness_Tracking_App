const mongoose = require('mongoose');
const MongoDB = require('mongodb');

const connectDb = async () => {
    try {
        let conn = await mongoose.connect (process.env.MONGODB_URI, {
            useUnifiedTopology: true, 
            useNewUrlParser: true, 
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch (err) {
        console.error (`Error ${err.message}`.red.underline.bold)
        process.exit(1);
    }
}

module.exports = connectDb;