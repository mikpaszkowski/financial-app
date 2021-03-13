const configDb = require("../config/db.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(configDb.DB, configDb.USER, configDb.PASSWORD, {
  host: configDb.HOST,
  dialect: configDb.dialect,
  operatorAliases: false,

  pool: {
    max: configDb.pool.max,
    min: configDb.pool.min,
    idle: configDb.pool.idle,
    acquire: configDb.pool.acquire,
    ecivt: configDb.pool.evict
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../users/usersModel.js")(sequelize, Sequelize);
db.role = require("../roles/model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin"];

//testing the connection to DB
sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully!"))
  .catch(err => console.error("Error : " + err));

module.exports = db;
