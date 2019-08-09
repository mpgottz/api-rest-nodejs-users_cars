const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const usersRoutes = require('../src/routes/users')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/');

//setting
app.set('port', process.env.PORT || 3001);

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json());

//Rutas
app.use('/api/users', usersRoutes);

//start to server
app.listen(app.get('port'), () =>{
    console.log('server corriendo en puerto', app.get('port'));
})