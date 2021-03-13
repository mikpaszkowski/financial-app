const express = require("express");
const router = express.Router();
const db = require("../mysql-orm/connection");

const Users = db.user;

//GET list of users
router.get("/", (req, res) => {
  Users.findAll()
    .then(users => {
      console.log(users);
      res.sendStatus(200);
    })
    .catch(err => console.error(err));
});

//POST user
router.post("/add-user", (req, res) => {
  let { id, username, email, password } = req.body;

  Users.create({
    id,
    username,
    email,
    password
  })
    .then(user => {
      res.send({ message: "User added successfully!" });
      console.log(user);
      res.status(200);
    })
    .catch(err => console.error(err));
});

//DELETE user by ID
router.post("/delete/:id", (req, res) => {
  Users.destroy({ where: { id: req.params.id } })
    .then(data => {
      console.log(data);
      console.log(`id: ` + req.params.id);
      res.redirect("/");
    })
    .catch(err => console.error(err));
});

module.exports = router;
