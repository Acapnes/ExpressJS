const express = require("express");
const router = express.Router();
const {getAccessToRoute} = require("../middlewares/authorization/auth")

const { getAllUsers,userLogin,userProfile,userRegister,testError,tokentest } = require("../controllers/auth");


router.get("/", getAllUsers);
router.get("/login", userLogin);
router.get("/tokentest", getAccessToRoute,tokentest);
router.post("/register", userRegister);
router.get("/profile", userProfile);
router.get("/testError", testError);

module.exports = router;
