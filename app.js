const express = require('express');
const mongoose = require('mongoose');
const compression = require('compression');
const bodyParser = require('body-parser');

const ENV = require("./environnement/environnement.js");

const app = express();
app.use(compression());



// app.use((req, res, next) => {
//     res.setHeader('Allow-Control-Allow-Headers', 'Authorization');
//     next();
// })


const DB_id = ENV.DB_ID;
const DB_pw = ENV.DB_PASSWORD;
const DB = 'mongodb+srv://' + DB_id + ':' + DB_pw + '@clustertest.lw5japt.mongodb.net/';

mongoose.connect(DB).then(() => {
    console.log('Connected to MongoDB with Success !');
}).catch((err) => {
    console.log('MongoDB ERROR', err);
});


app.use(bodyParser.json());
// ROUTES
const apiRoutes = require('./routes/api');
const pokemonRoutes = require('./routes/pokemon');
const userRoutes = require('./routes/user');

app.use('/api/', apiRoutes);
app.use('/api/pokemons/', pokemonRoutes);
app.use('/api/users/', userRoutes);

module.exports = app;