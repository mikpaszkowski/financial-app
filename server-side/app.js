const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config({ path: "variables.env" });

const app = express();

const corsOptions = {
  origin: "http://localhost:3001"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome on the dark side of the application." });
});
module.exports = app;
