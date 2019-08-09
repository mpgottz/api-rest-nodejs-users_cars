const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Declaración del esquema de Base de datos
const userSchema = new Schema({
    firsName: String,
    lastName: String,
    email: String,
    cars: [{
        type: Schema.Types.ObjectId,
        ref: 'car'
    }]
})

//Exporta el modelo con esquema "user" para utilización en rutas y controladores
module.exports = mongoose.model('user', userSchema);