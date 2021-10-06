const express = require('express');
const categoryController = require('../controllers/productCategoryController');

const router = express.Router();

router.route('/').get(categoryController.PostcreatePage);
router.route('/categories1').post(categoryController.createCategories1);
router.route('/categories2').post(categoryController.createCategories2);
router.route('/categories3').post(categoryController.createCategories3);
router.route('/categories4').post(categoryController.createCategories4);


module.exports = router;



