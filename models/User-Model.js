const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  tc: {
    type:Number
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique:true
  },
  number: {
    type:Number
  },
  birtday:{
    type:Date
  },
  gender:{
    type:Boolean
  },
  password:{
      type:String,
      require:true
  },
  address:{
    type: [String]
  },
  creteAt: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', function(next){
  const user = this 
  bcrypt.hash(user.password,10,(error,hash) =>{
    user.password = hash;
    next();
  });
});

const User = mongoose.model('User',userSchema);

module.exports = User;