module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("Users", {
    id: {
      type: Sequelize.INTEGER(15),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING(30),
      allowNull: false,
      unique: true
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
    // createdAt: {
    //   type: "TIMESTAMP",
    //   defaultValue: DataTypes.NOW,
    //   field: "created_at"
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   defaultValue: DataTypes.NOW,
    //   inUpdate: DataTypes.NOW,
    //   field: "updated_at"
    // }
  });

  return User;
};
