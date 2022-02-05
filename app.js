require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require('cors')


// Regular Middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(cros())

// Morgan Middleware 
app.use(morgan('tiny'))


// import all routes here
const tweet = require('./routes/tweet')
const user = require('./routes/user')

// router middleware 

app.use('/api/v1', tweet)
app.use('/api/v1', user)



module.exports = app;