const User = require("../Models/User");
const CustomError = require("../helpers/error/CustomError")

const getAllUsers = (req, res, next) => {
  res.status(200).json({
    success: true,
    status: 200,
  });
};
const userLogin = (req, res, next) => {
  res.status(200).json({
    success: true,
    status: 200,
  });
};

const userRegister = async (req, res, next) => {
  const name = "Alper81";
  const email = "Alper81@gmail.com";
  const password = "1234567";

  const user = await User.create({
    name,
    email,
    password,
  }).then((resp) => {
    res.status(200).json({
      success: true,
      status: 200,
      data: resp
    });
  }).catch((err) => {
    return next(err);
  });


};
const userProfile = (req, res, next) => {
  res.status(200).json({
    success: true,
    status: 200,
  });
};

const testError = (req,res,next) =>{
  return next(new SyntaxError("Custom error Message"));
}

module.exports = {
  getAllUsers,
  userLogin,
  userRegister,
  userProfile,
  testError,
};
