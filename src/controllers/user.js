// Exporta modelos de los esquemas de BD
const User = require('../models/user');
const Car = require('../models/cars');

module.exports = {

    //Obtiene todos los usuarios
    index: async (req, res, next) => {
        const users = await User.find({});
        res.status(200).json(users);
    },

    //Agrega nuevos usuarios
    newUser: async (req, res, next) => {
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(200).json(user);
    },

    //Obtiene un usuarios
    getUser: async (req, res, next) => {
        const { userId } = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
    },

    //Reemplaza un usuario
    replaceUser: async (req, res, next) => {
        const { userId } = req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({success:  true});
    },
    
    //Actualiza usuarios
    updateUser: async (req, res, next) => {
        const { userId } = req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({success:  true});
    },

    //Elimina usuarios
    deleteUser: async (req, res, next) => {
        const { userId } = req.params;
        await User.findByIdAndRemove(userId);
        res.status(200).json({success:  true});
    },

    //Obtiene usuarios y sus vehículos
    getUsersCars: async (req, res, next) => {
        const { userId } = req.params;
        //método "populate" de mongoDB muestra ObjectId de tabla hija con ObjectId de padre
        const user = await User.findById(userId).populate('cars');
        res.status(200).json(user);
    },

    //Agrega vehículos al usuario
    newUsersCars: async (req, res, next) => {
        const { userId } = req.params;
        const newCar = new Car(req.body);
        const user = await User.findById(userId);
        newCar.seller = user;
        await newCar.save();
        user.cars.push(newCar);
        await user.save();
        res.status(201).json(user);
    }

};