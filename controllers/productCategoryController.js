const fileUpload = require('express-fileupload');
const express = require('express');
const fs = require('fs');

const Product = require("../models/product");
const Categories_1 = require("../models/categories-1-Model");
const Categories_2 = require("../models/categories-2-Model");
const Categories_3 = require("../models/categories-3-Model");
const Categories_4 = require("../models/categories-4-Model");



var app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(fileUpload());


exports.mappingcreate= async (req, res) => {
  try {
    const variable_1 = await Mapping.create(req.body);
    res.status(201).json({
      status: "success",
      variable_1,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};


exports.PostcreatePage= async (req, res) => {
  const uploadDir = './public/images/WebSiteUploads/Category1';
    if(!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir)
    }
  const variable_1 = await Categories_1.find().sort({category:1});
  const variable_2 = await Categories_2.find().sort({category:1});
  const variable_3 = await Categories_3.find().sort({category:1});
  const variable_4 = await Categories_4.find().sort({category:1});
 
  try {
    res.status(201).render('postMongoose',{
      status: "success",
      variable_1,
      variable_2,
      variable_3,
      variable_4
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};


exports.createCategories1= async (req, res) => {

  let uploadeImage = req.files.image;
  await console.log(req.body);
  let uploadPath = './public/images/WebSiteUploads/Category1/' + `${uploadeImage.name}`;
  console.log(`Resim Yolu => ${uploadPath}`);
  try {
    uploadeImage.mv(uploadPath, async () =>{
      await Categories_1.create({
        ...req.body,
        image: 'images/WebSiteUploads/Category1/' + `${req.files.image.name}`,
      });
    });
    res.status(201).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.createCategories2= async (req, res) => {
  let uploadeImage = req.files.image;
  await console.log(req.body);
  let uploadPath = './public/images/WebSiteUploads/Category2/' + `${uploadeImage.name}`;
  console.log(`Resim Yolu => ${uploadPath}`);
  try {
    uploadeImage.mv(uploadPath, async () =>{
      await Categories_2.create({
        ...req.body,
        image: 'images/WebSiteUploads/Category2/' + `${req.files.image.name}`,
      });
    });
    res.status(201).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
}

exports.createCategories3= async (req, res) => {
  let uploadeImage = req.files.image;
  await console.log(req.body);
  let uploadPath = './public/images/WebSiteUploads/Category3/' + `${uploadeImage.name}`;
  console.log(`Resim Yolu => ${uploadPath}`);
  try {
    uploadeImage.mv(uploadPath, async () =>{
      await Categories_3.create({
        ...req.body,
        image: 'images/WebSiteUploads/Category3/' + `${req.files.image.name}`,
      });
    });
    res.status(201).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.createCategories4= async (req, res) => {
  let uploadeImage = await req.files.image;
  await console.log(req.body);
  let uploadPath = './public/images/WebSiteUploads/Category4/' + `${uploadeImage.name}`;
  console.log(`Resim Yolu => ${uploadPath}`);
  try {
    uploadeImage.mv(uploadPath, async () =>{
      await Categories_4.create({
        ...req.body,
        image: 'images/WebSiteUploads/Category4/' + `${req.files.image.name}`,
      });
    });
    res.status(201).json({
      status: "success",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

//Kategori Listeleme
exports.getCategories1= async (req, res) => {
  userIN
  try {
    const variable_1 = await Categories_1.find().sort({index:1});
    const categoryPreVariable= "";
    const Category1_Check = true;
    const Category2_Check = false;
    const Category3_Check = false;
    const Category4_Check = false;
    res.status(200).render('categories-1',{
      variable_1,
      categoryPreVariable,
      Category1_Check,
      Category2_Check,
      Category3_Check,
      Category4_Check,
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
exports.getCategories2 = async (req, res) => {
  userIN
  try {
    const categoryPreVariable = await Categories_1.findOne({slug:req.params.slug})
    const variable_1 = await Categories_2.find({category:categoryPreVariable._id}).sort({index:1});
    const Category1_Check = false;
    const Category2_Check = true;
    const Category3_Check = false;
    const Category4_Check = false;
    res.status(200).render( 'categories-1',{
      variable_1,
      categoryPreVariable,
      Category1_Check,
      Category2_Check,
      Category3_Check,
      Category4_Check,
    page_name:'course',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
//Alt Kategori - 3. Categories Sayfası
exports.getCategories3 = async (req, res) => {
  userIN
  try {
    const categoryPreVariable = await Categories_2.findOne({slug:req.params.slug2})
    const variable_1 = await Categories_3.find({category:categoryPreVariable._id}).sort({index:1});
    const variable_23 = await Categories_4.find({category:categoryPreVariable._id}).sort({index:1});
    const Category1_Check = false;
    const Category2_Check = false;
    const Category3_Check = true;
    const Category4_Check = false;
    res.status(200).render( 'categories-1',{
      variable_1,
      categoryPreVariable,
      Category1_Check,
      Category2_Check,
      Category3_Check,
      Category4_Check,
    page_name:'subcategory',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
//Alt Kategori - 4.Categories Sayfası
exports.getCategories4 = async (req, res) => {
  userIN
  try {
    const categoryPreVariable = await Categories_3.findOne({slug:req.params.slug3})
    const variable_1 = await Categories_4.find({category:categoryPreVariable._id}).sort({index:1});
    const Category1_Check = false;
    const Category2_Check = false;
    const Category3_Check = false;
    const Category4_Check = true;
    res.status(200).render( 'categories-1',{
      variable_1,
      categoryPreVariable,
      Category1_Check,
      Category2_Check,
      Category3_Check,
      Category4_Check,
    page_name:'subcategory',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

//5. Slug -> Ürünlerin Tekil Sayfası
exports.getCategories5 = async (req, res) => {
  userIN
  const sayilar = new Array();
   try {
    const categoryPreVariable = await Categories_3.findOne({slug:req.params.slug3})
    const variable_1 = await Categories_4.find({slug:req.params.slug4})
    const Relatedproducts = await Categories_4.find({category:categoryPreVariable.id}).sort({index:-1});
    let sayi = 0;
    switch (Relatedproducts.length) {
      case 1:
         sayi = 1;
         break;
      case 2:
          sayi = 2;
          break;
      case 3:
         sayi = 3;
         break;
    
      default:
         sayi = 4;
        break;
    }
    for (var i = 0; i < sayi; i++) {  
        var randomnumber = Math.floor(Math.random() * (Relatedproducts.length)); 
        if (sayilar.indexOf(randomnumber)==-1) { 
            sayilar.push(randomnumber);
        }
        else { 
            i--;
        }
    }
  
    res.status(200).render( 'productPage',{
      userIN,
      variable_1,
      sayilar,
      categoryPreVariable,
      sayi,
      Relatedproducts,
      page_name:'subcategory',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

