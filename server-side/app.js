const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./mysql-orm/connection");

require("dotenv").config({ path: "variables.env" });

const app = express();

const corsOptions = {
  origin: "http://localhost:3001"
};

db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Drop and Resync Db");
    initial();
  })
  .catch(err => console.err(err));

const Role = db.role;

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome on the dark side of the application." });
});

//CREATING USER / ADMIN ROLES
function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
  Role.create({
    id: 2,
    name: "admin"
  });
}

/* EXPORTING APP TO NETWORK LAYER */
module.exports = app;
