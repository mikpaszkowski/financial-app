const db = require("../mysql-orm/connection");

const Transaction = db.transaction;

const getAll = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    if (!transactions) {
      res.status(404).send({ msg: "Transactions not found." });
    }
  } catch (err) {
    res.status(500).send({ msg: err });
  }
};

const send = async (req, res) => {
  try {
    const sendTransaction = await Transaction.create({
      amount: req.body.amount,
      transactionType: req.body.transactionType,
      description: req.body.description,
      status: null
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
