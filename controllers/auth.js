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
const userRegister = (req, res, next) => {
  res.status(200).json({
    success: true,
    status: 200,
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
