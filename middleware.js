const accessControl = (req, res, next) => {
  let control = false;
  if (!control) {
    res.status(404).json({
      success: false,
      message: "You are not uthorized",
    });
  }
  next(); /// Next Yazılmassa request kullanıcı tarafından gönderilir serverdan yanıt gelmez
};

module.exports = {
  accessControl,
};
