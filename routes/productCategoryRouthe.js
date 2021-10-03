const express = require('express');
const categoryController = require('../controllers/productCategoryController');
const router = express.Router();

router.route('/').post(categoryController.createCatagory);
router.route('/').get(categoryController.getAllCatagory);
router.route('/:slug').get(categoryController.getCategory);
router.route(`/:slug/:slug2`).get(categoryController.getSubCategory);

module.exports = router;