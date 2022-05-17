const User = require("../Models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");
const { sendJwtToClient } = require("../helpers/authorization/tokenHelpers");
const { validateUserInput,comparePassword } = require("../helpers/authorization/input/inputHelpers")

const getAllUsers = (req, res, next) => {
  User.find({}, function (err, users) {
    if (err) return next(err);
    res.json({
      success: true,
      data: users,
    });
  });
};
const userLogin = async (req, res, next) => {

  const { email, password } = req.body;
  if (!validateUserInput(email, password)) {
    return next(new CustomError("Please fill email and password", 404));
  }

  const user = await User.findOne({email}).select("+password");

  if(!comparePassword(password,user.password)){
    return next(new CustomError("Please check your credentials",400))
  }
  
  sendJwtToClient(user, res);
};

const userRegister = asyncErrorWrapper(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  sendJwtToClient(user, res);
});

const getUser = ((req, res, next) => {

  res.json({
    success: true,
    data: {
      id: req.user.id,
      name: req.user.name,
    }
  })
})

const testError = (req, res, next) => {
  return next(new SyntaxError("Custom error Message"));
};

module.exports = {
  getAllUsers,
  userLogin,
  userRegister,
  testError,
  getUser,
};
