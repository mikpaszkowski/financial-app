const db = require("../mysql-orm/connection");

const Users = db.user;

const findUserById = (req, res) => {
  Users.findOne({
    where: {
      id: parseInt(req.params.id)
    }
  })
    .then(user => {
      if (!user) {
        res.status(200).send("null");
      }
    })
    .catch(err => console.log(err));
};

const deleteUserById = (req, res) => {
  Users.destroy({ where: { id: parseInt(req.params.id) } })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => console.error(err));
};

const updateUser = (req, res) => {
  Users.update(
    { username: "luke99855" },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(() => res.send({ message: "User updated" }))
    .catch(err => console.error(err));
};

module.exports = {
  findUserById,
  deleteUserById,
  updateUser
};
