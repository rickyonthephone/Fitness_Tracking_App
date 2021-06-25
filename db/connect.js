const mongoose = require('mongoose');


const connectDb = async () => {
    try {
        let conn = await mongoose.connect (process.env.MONGODB_URI || "mongodb:localhost/workout", {
            useUnifiedTopology: true, 
            useNewUrlParser: true, 
            useCreateIndex: true,
            useFindAndModify: true
        }
    );
        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline)
    } catch (err) {
        console.error (`Error ${err.message}`.red.underline.bold)
        process.exit(1);
    }
}

module.exports = connectDb;