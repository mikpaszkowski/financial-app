const db = require("../mysql-orm/connection");

const Transaction = db.transaction;

const getAll = async (req, res) => {
  try {
    const response = await Transaction.findAll();
    if (!response) {
      res.status(404).send({ msg: "Transactions not found." });
    }
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ msg: err });
  }
};

const send = async (req, res) => {
  try {
    const sendTransaction = await Transaction.create({
      id: req.body.id,
      amount: req.body.amount,
      transactionType: req.body.transactionType,
      description: req.body.description,
      status: req.body.status
    });
    console.log(sendTransaction);
    res.status(200).json({
      id: sendTransaction.id,
      transactionType: sendTransaction.transactionType,
      description: sendTransaction.description,
      status: sendTransaction.status
    });
  } catch (err) {
    res.status(500).send({ msg: err });
  }
};

module.exports = {
  getAll,
  send
};
