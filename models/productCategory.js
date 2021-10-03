const mongoose = require("mongoose");
const slugify = require('slugify');


const Schema = mongoose.Schema;

const ProductCategoryShema = new Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    index:{
        type:Number,
        require:true,
        unique:true
    },
    slug:{
        type:String,
        unique:true
    }
});
ProductCategoryShema.pre('validate',function(next){
    this.slug = slugify(this.name,{
      lower:true,
      scrict: true
    });
    next();
});

const ProductCategory = mongoose.model('ProductCategory',ProductCategoryShema);
module.exports = ProductCategory;