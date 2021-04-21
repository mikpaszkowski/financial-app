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
    const sendTransaction = await Transaction.create(req.body);
    res.status(200).json(sendTransaction);
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
