const express = require("express");
const router = express.Router();
const transactionController = require("./transactionController");

//get all transactions
router.get("/findAll/:userId", transactionController.findAll);

//get one transaction info by ID
router.get("/findOne/:id", transactionController.findOneById);

//send / request transaction
router.post("/create", transactionController.create);

//modify request
router.put("/edit/:id", transactionController.modifyTransaction);

module.exports = router;
