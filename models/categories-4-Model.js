const mongoose = require("mongoose");
const slugify = require('slugify');

const Schema = mongoose.Schema;


const Categories_4_Sheama = new Schema({
    name:{
        type:String,
    },
    image:{
        type:String,
    },
    explanation:{
      type:String  
    },
    index:{
        type:Number,
    },
    slug:{
        type:String,
        unique:true
    },
    price:{
        type:Number
    },
    info:[String],
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'productCategory'
    }
});


Categories_4_Sheama.pre('validate',function(next){
    this.slug = slugify(this.name,{
      lower:true,
      scrict: true
    });
    next();
});

const Categories_4 = mongoose.model('Categories_4',Categories_4_Sheama);
module.exports = Categories_4;