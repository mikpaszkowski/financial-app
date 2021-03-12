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

db.user = require("../users/model.js")(sequelize, Sequelize);
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

//testing the connection
testConnection();

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established succesfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
}

module.exports = db;
