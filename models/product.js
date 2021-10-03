const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require('slugify');

const productSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String
  },
  image:{
      type:String
  },
  index:{
    type:Number
  },
  price:{
      type:Number
  },
  creteAt: {
    type: Date,
    default: Date.now,
  },
  slug:{
    type:String,
    unique:true
  },
  category:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'productSubcategory'
  }
});
productSchema.pre('validate',function(next){
  this.slug = slugify(this.name,{
    lower:true,
    scrict: true
  });
  next();
});

const Product = mongoose.model('Product',productSchema);

module.exports = Product;