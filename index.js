var mongoose = require("mongoose");
require('dotenv').config()
//const connectToDb = require('./config/db1.js')
mongoose.connect("mongodb://localhost:27017/testing");

const express = require('express');
const app = express();


var userRoute = require('./routes/MarksUpload');

//connectToDb()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const userRoutes = require('./routes/userRoutes.js')

app.use('/', userRoute);
app.use('/', userRoutes)
app.listen(3000, function () {
    console.log('app is runing');
})


module.exports = app