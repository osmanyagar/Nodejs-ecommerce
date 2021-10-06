const mongoose = require("mongoose");
const slugify = require('slugify');


const Schema = mongoose.Schema;

const Categories_2_Sheama = new Schema({
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    subTitle:String,
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
Categories_2_Sheama.pre('validate',function(next){
    this.slug = slugify(this.name,{
      lower:true,
      scrict: true
    });
    next();
});

const Categories_2 = mongoose.model('Categories_2',Categories_2_Sheama);
module.exports = Categories_2;