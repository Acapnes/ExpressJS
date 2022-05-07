const express = require("express");
const router = express.Router();


const { getAllUsers,userLogin,userProfile,userRegister } = require("../controllers/auth");


router.get("/", getAllUsers);
router.get("/login", userLogin);
router.get("/register", userRegister);
router.get("/profile", userProfile);

module.exports = router;
