const express = require("express");
const router = express.Router();


const { getAllUsers,userLogin,userProfile,userRegister,testError } = require("../controllers/auth");


router.get("/", getAllUsers);
router.get("/login", userLogin);
router.post("/register", userRegister);
router.get("/profile", userProfile);
router.get("/testError", testError);

module.exports = router;
