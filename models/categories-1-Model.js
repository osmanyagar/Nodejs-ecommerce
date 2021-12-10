const mongoose = require("mongoose");
const slugify = require('slugify');

const Schema = mongoose.Schema;

const Categories_1_Sheama = new Schema({
    name:{
        type:String,
    },
    image:{
        type:String,  
    },
    subTitle:{
        type:String,  
    },
    index:{
        type:Number,
    },
    slug:{
        type:String,
    },
    createAt:{
        type: Date, 
        default: new Date(Date.now() + 3 * 60 * 60 * 1000),
    }
});
Categories_1_Sheama.pre('validate',function(next){
    this.slug = slugify(this.name,{
      lower:true,
      scrict: true
    });
    next();
});

const Categories_1= mongoose.model('Categories_1',Categories_1_Sheama);
module.exports = Categories_1;