const express = require('express');
const Controller = require('../controllers/productsController');

const router = express.Router();

router.route('/').post(Controller.CreateProducts);
router.route('/').get(Controller.getProducts);

module.exports = router;