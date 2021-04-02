const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

// CONFIGURING *.env variables
require("dotenv").config({ path: "variables.env" });

//Database
const db = require("./mysql-orm/connection");

//  CREATING THE EXPRESS APP
const app = express();

//MIDDLEWARES
app.use(cors());
app.use(morgan("dev"));

// DATABASE CONNECTION
db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized.");
    initial();
  })
  .catch(err => console.err(err));

//Body Parser - COntent-Type - application/json
app.use(bodyParser.json());
//x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome on the dark side of the application." });
});

app.use("/users", require("./user/userRoutes"));
app.use("/transaction", require("./transactions/transactionRoutes"));

//CREATING USER / ADMIN ROLES
function initial() {
  db.role.create({
    id: 1,
    name: "user"
  });
  db.role.create({
    id: 2,
    name: "admin"
  });
}

/* EXPORTING APP TO NETWORK LAYER */
module.exports = app;
