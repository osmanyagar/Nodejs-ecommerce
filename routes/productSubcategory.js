const express = require('express');
const categoryController = require('../controllers/productSubCategoryController');

const router = express.Router();

router.route('/').post(categoryController.createSubCatagory);
router.route('/').get(categoryController.getAllSubCatagory);

module.exports = router;