module.exports = (sequelize, Sequelize) => {
  const Transaction = sequelize.define("Transaction", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    transactionType: {
      type: Sequelize.STRING(10),
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    }
  });

  return Transaction;
};
