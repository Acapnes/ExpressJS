const User = require("../Models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const {sendJwtToClient} = require("../helpers/authorization/tokenHelpers");


const getAllUsers = (req, res, next) => {
  User.find({}, function (err, users) {
    if (err) return next(err);
    res.json({
      success: true,
      data: users,
    });
  });
};
const userLogin = (req, res, next) => {
  res.status(200).json({
    success: true,
    status: 200,
  });
};

const userRegister = asyncErrorWrapper(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
  });


  sendJwtToClient(user,res);
});

const tokentest = ((req,res,next) => {

  res.json({
    success:true,
    message:"Welcome u passed from authorization."
  })
})

const userProfile = (req, res, next) => {
  res.status(200).json({
    success: true,
    status: 200,
  });
};

const testError = (req, res, next) => {
  return next(new SyntaxError("Custom error Message"));
};

module.exports = {
  getAllUsers,
  userLogin,
  userRegister,
  userProfile,
  testError,
  tokentest,
};
