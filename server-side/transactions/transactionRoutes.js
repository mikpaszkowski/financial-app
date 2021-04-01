const express = require("express");
const router = express.Router();
const transactionController = require("./transactionController");

//get all transactions
router.get("/getAll/:userId", transactionController.getAll);

//get one transaction info by ID
router.get("/getOne/:id", transactionController.getOneById);

//send / request transaction
router.post("/create", transactionController.create);

//modify request
router.put("/edit/:id", transactionController.modifyTransaction);

module.exports = router;
