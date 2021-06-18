const express = require('express');
const colors = require('colors');
const connectDb = require('./db/connect');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require ('dotenv');
const path = require('path');

const port = process.env.PORT || 8080

dotenv.config();
connectDb();

const app = express();
app.use (bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '/public')));



// HTML routing here vs. separate folder

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get ('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'stats.html'));
});

app.get ('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'exercise.html'));
});

//API routing below vs. separate file








app.get('/', (req, res) => {
    res.send('api is connected')
})


//Connect to PORT and console.log message that server is running for verification
app.listen (port, () => {
    console.log(`Server running on port ${port}`.yellow.bold)
})


