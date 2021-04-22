const express = require("express");
const router = express.Router();
const transactionController = require("./transactionController");
const authorizationJWT = require("../middleware/authJWT");

//get all transactions
router.get("/findAll/:userId", transactionController.findAll);

//get one transaction info by ID
router.get("/findOne/:id", transactionController.findOneById);

//send / request transaction
router.post("/create", authorizationJWT, transactionController.create);

//modify request
router.put("/edit/:id", transactionController.modifyTransaction);

module.exports = router;
