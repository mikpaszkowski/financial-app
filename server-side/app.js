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
const corsOptions = {
  origin: "http://localhost:3001"
};
app.use(cors(corsOptions));
app.use(morgan("dev"));

// DATABASE CONNECTION
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Drop and Resync Db");
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

app.use("/all-users", require("./users/usersRoutes"));

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
