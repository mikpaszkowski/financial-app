const db = require("../mysql-orm/connection");

const Transaction = db.transaction;

const findAll = async (req, res) => {
  try {
    const response = await Transaction.findAll({
      where: {
        userId: req.params.userId
      }
    });
    if (!response) {
      res.status(404).send({ msg: "Transactions not found." });
    }
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send({ msg: err });
  }
};

const create = async (req, res) => {
  console.log(req.body);
  try {
    const sendTransaction = await Transaction.create({
      id: req.body.id,
      amount: req.body.amount,
      transactionType: req.body.transactionType,
      description: req.body.description,
      status: req.body.status,
      userId: req.body.userId
    });
    res.status(200).json({
      id: sendTransaction.id,
      amount: sendTransaction.amount,
      transactionType: sendTransaction.transactionType,
      description: sendTransaction.description,
      status: sendTransaction.status
    });
  } catch (err) {
    res.status(500).send({ msg: err });
  }
};

const findOneById = async (req, res) => {
  try {
    const transaction = await Transaction.findByPk(req.params.id, {
      include: ["user"]
    });
    if (!transaction) {
      res.status(404).send({ msg: "Transaction not found." });
    }
    res.status(200).send(transaction);
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

const modifyTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      where: {
        id: req.params.id
      }
    });
    if (!transaction) {
      res
        .status(404)
        .send({ msg: "Transaction not found. Cannot modify transaction." });
    }

    const updatedTransaction = await transaction.update(req.body);

    if (!updatedTransaction) {
      res
        .status(404)
        .send({ msg: "Transaction not found. Cannot modify transaction." });
    }
    res.status(200).send(updatedTransaction);
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

module.exports = {
  findAll,
  create,
  findOneById,
  modifyTransaction
};
