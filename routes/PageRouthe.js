const express = require('express');
const pageController = require('../controllers/pageControllers');
const categoryController = require('../controllers/productCategoryController');


const router = express.Router();


router.route('/').get(categoryController.getCategories1);
router.route('/anasayfa').get(pageController.getHomePage);
router.route('/sepet').get(pageController.getPaymentPage);
router.route('/iletisim').get(pageController.getContactPage);
router.route('/blog').get(pageController.getBlogPage);
router.route('/hakkimizda').get(pageController.getaboutPage);
// router.route('*').get(pageController.Page404);
module.exports = router;