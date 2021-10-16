//Login - Register Controller DEP.
const bcrypt = require("bcrypt");
const User = require("../models/User-Model");

exports.userLogin= async (req, res) => {
  try {
    res.status(201).render('Auth/login',{
      status: "success"
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};
exports.userRegister= async (req, res) => {
  try {
    res.status(201).render('Auth/register',{
      status: "success"
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.userForgetPas= async (req, res) => {
  try {
    res.status(201).render('Auth/forget',{
      status: "success"
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};




exports.createUser= async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      user,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.getUser= async (req, res) => {
  try {
     
  const {email,password} = req.body;
  console.log(`${email} = ${password}`);
  try {
      User.findOne({email}, (err,user)=>{
        if(user){
          bcrypt.compare(password,user.password,(err,same)=>{
            if(same){
              req.session.userID = user._id
              console.log(req.session.userID);
              res.status(202).redirect('/');
            }else{
              res.status(200).send("Hatalı Şifre!");
            }
        });
      }else{
        res.status(200).send("Kullanıcı Bulunamadı!");
      }
    });
    
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
    
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
  }
};

exports.logOut= (req,res) =>{
  req.session.destroy(()=>{
    res.redirect('/');
  });
};


