const express = require('express');
const authControllers = require('../controllers/authController');

const router = express.Router();

//Page - Route
router.route('/').get(authControllers.userLogin);
router.route('/KayitOl').get(authControllers.userRegister);
router.route('/SifremiUnuttum').get(authControllers.userForgetPas);


//Login - Register - MongooseOp.

router.route('/register').post(authControllers.createUser);
router.route('/login').post(authControllers.getUser);
router.route('/logout').get(authControllers.logOut);

module.exports = router;