const express = require('express');
const app = express();
const routes = require('./routes/index.js');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// configuring dotenv
dotenv.config({
    path: path.join(__dirname, "./.env"),
});

app.get('/', (req, res) => {
    res.send("Hey there!");
});

// connecting to mongodb
mongoose.connect(process.env.MONGODBURL).then(() => {
    console.log('Connected to Database');
});





app.use('/v1', routes);



app.listen(process.env.PORT, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
});