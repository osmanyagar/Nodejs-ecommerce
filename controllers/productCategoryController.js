const Product = require("../models/product");
const Category = require("../models/productCategory");
const SubCategory = require("../models/productSubcategory");

exports.createCatagory= async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json({
      status: "success",
      category,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getAllCatagory= async (req, res) => {
  try {
    const category = await Category.find().sort({index:1});
    res.status(200).render('productPage',{
      category,
      page_name:'course',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
//Alt Kategori Grubunu Çağırır
exports.getCategory = async (req, res) => {
  try {
    const courses = await Category.findOne({slug:req.params.slug})
    const subcategory = await SubCategory.find({category:courses._id}).sort({index:1});
    res.status(200).render( 'subProductPage',{
    courses,
    subcategory,
    page_name:'course',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
exports.getSubCategory = async (req, res) => {
  try {
    const courses = await SubCategory.findOne({slug:req.params.subSlug})
    const subcategory = await Product.find({category:courses._id}).sort({index:1});
    res.status(200).render( 'originproductPage',{
    subcategory,
    page_name:'subcategory',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

