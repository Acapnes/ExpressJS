const User = require("../models/User");

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
    console.log("Error === "+err);
    res.status(404).json({
      message: "Error!",
      success: false,
      status: 404,
      data: err
    });
  });


};
const userProfile = (req, res, next) => {
  res.status(200).json({
    success: true,
    status: 200,
  });
};

module.exports = {
  getAllUsers,
  userLogin,
  userRegister,
  userProfile,
};
