const mongoose = require("mongoose");
const slugify = require('slugify');


const Schema = mongoose.Schema;

const Categories_3_Sheama = new Schema({
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
Categories_3_Sheama.pre('validate',function(next){
    this.slug = slugify(this.name,{
      lower:true,
      scrict: true
    });
    next();
});

const Categories_3 = mongoose.model('Categories_3',Categories_3_Sheama);
module.exports = Categories_3;