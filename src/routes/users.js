const router = require('express-promise-router')();

const {
    index,
    newUser,
    getUser,
    replaceUser,
    deleteUser,
    getUsersCars,
    newUsersCars
} = require('../controllers/user');

//Rutas que obtienen las funciones de los controladores con sus distintos métodos

router.get('/', index);
router.post('/', newUser);

router.get('/:userId', getUser);
router.put('/:userId', replaceUser);
router.delete('/:userId', deleteUser);

router.get('/:userId/cars', getUsersCars);
router.post('/:userId/cars', newUsersCars);

module.exports = router;