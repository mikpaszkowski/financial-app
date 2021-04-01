const express = require("express");
const router = express.Router();
const transactionController = require("./transactionController");

//get all transactions
router.get("/getAll", transactionController.getAll);

// router.get("/getOne/:id", transactionController.getOneById);

//send money
router.post("/send", transactionController.send);

// //request money
// router.post("/request", transactionController.request);

module.exports = router;
