const express = require("express");
const router = express.Router();
const userController = require("./userController");
const authController = require("../services/auth");

//find User by ID
router.get("/findUser/:id", userController.findUserById);

//SIGN UP - POST user
router.post("/signup", authController.signUp);

//LOG IN - POST user
router.post("/login", authController.logIn);

//DELETE user by ID
router.delete("/delete/:id", userController.deleteUserById);

//update User by ID
router.put("/update/:id", userController.updateUser);

module.exports = router;
