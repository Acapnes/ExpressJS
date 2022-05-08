const User = require("../Models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");

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

const userRegister = asyncErrorWrapper(async (req, res, next) => {
  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
  }).then((resp) => {
    res.status(200).json({
      success: true,
      data: resp,
    });
  });
});

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
};
