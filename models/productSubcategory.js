const mongoose = require("mongoose");
const slugify = require('slugify');


const Schema = mongoose.Schema;
//index ekle
const SubCategoryShema = new Schema({
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
    },
    slug:{
        type:String,
        unique:true
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'productCategory'
    }
});
SubCategoryShema.pre('validate',function(next){
    this.slug = slugify(this.name,{
      lower:true,
      scrict: true
    });
    next();
});

const SubCategory = mongoose.model('SubCategory',SubCategoryShema);
module.exports = SubCategory;