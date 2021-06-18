const express = require('express');
const colors = require('colors');
const connectDb = require('./db/connect');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require ('dotenv');
const Workout = require('./models/Workout.js');

const port = process.env.PORT || 8080

dotenv.config();
connectDb();

const app = express();
app.use(morgan('dev'));
app.use (bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('/public'));

//Routing

require('./routes/apiRoutes')
require('./routes/htmlRoutes')

app.get('/', (req, res) => {
    res.send('api is connected')
})


//Connect to PORT and console.log message that server is running for verification
app.listen (port, () => {
    console.log(`Server running on port ${port}`.yellow.bold)
})


