//productSubcategory Controllerı |Ürün Kategorisi -> Alt Kategori -> Ürünler| kısmının 2.Bölümüdür    
const SubCategory = require("../models/productSubcategory");

exports.createSubCatagory= async (req, res) => {
  try {
    const category = await SubCategory.create(req.body);
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

exports.getAllSubCatagory= async (req, res) => {
  try {
    const category = await SubCategory.find();
    res.status(201).json({
      status: "success",
      category,
    });

    // res.status(200).render('productpage',{
    //   category,
    //   page_name:'course',
    // });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
