const express = require('express');
const colors = require('colors');
const connectDb = require('./db/connect');
const morgan = require('morgan');
const dotenv = require ('dotenv');



const port = process.env.PORT || 8080

dotenv.config();
connectDb();

const app = express();
app.use(morgan('dev'));
app.use (express.json())
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

//Routing

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);



//Connect to PORT and console.log message that server is running for verification
app.listen (port, () => {
    console.log(`Server running on port ${port}`.yellow.bold)
})


