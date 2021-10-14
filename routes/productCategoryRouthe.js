const express = require('express');
const categoryController = require('../controllers/productCategoryController');
const router = express.Router();

// Kategori- 1 -(Biblo - Saat - Anahtarlık);
router.route('/').get(categoryController.getCategories1);
//Alt Kategori - 2 -(Biblo(seçim) => Mesleki Biblo - Sevgili Biblo - Özel Tasarım Biblo)
router.route('/:slug').get(categoryController.getCategories2);
// Alt Kategori - 3 -(Mesleki Biblo(seçim) => Polis - Asker - Doktor)
router.route(`/:slug/:slug2`).get(categoryController.getCategories3);
//Alt Kategori - 4 - ( Doktor(Seçim) => Doktor Temalı Ürünler Sergileniz)
router.route(`/:slug/:slug2/:slug3`).get(categoryController.getCategories4);
//Alt Category - 5 -> Tekil Ürünleri Sergiler. (Ejderha Üzerinde Doktor Karikatürü)
router.route(`/:slug/:slug2/:slug3/:slug4`).get(categoryController.getCategories5); 

module.exports = router;