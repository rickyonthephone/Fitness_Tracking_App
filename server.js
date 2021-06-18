const express = require('express');
const colors = require('colors');
const connectDb = require('./db/connect');
const morgan = require('morgan');
const dotenv = require ('dotenv');
const workoutRoutes = require ('./routes/workoutRoutes.js');

const port = process.env.PORT || 8080

dotenv.config();
connectDb();
const app = express();

app.use (express.json())
app.use ('/workouts', workoutRoutes)
app.get('/', (req, res) => {
    res.send('api is connected')
})

app.listen (port, () => {
    console.log(`Server running on port ${port}`.yellow.bold)
})


