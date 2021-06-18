const express = require('express');
const colors = require('colors');
const connectDb = require('./db/connect');
const morgan = require('morgan');
const dotenv = require ('dotenv');

dotenv.config();
connectDb();


