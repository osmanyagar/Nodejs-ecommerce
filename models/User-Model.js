const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique:true
  },
  password:{
      type:String,
      require:true
  },
  creteAt: {
    type: Date,
    default: Date.now,
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