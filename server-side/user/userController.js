const db = require("../mysql-orm/connection");

const Users = db.user;

const findUserById = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        id: parseInt(req.params.id)
      }
    });
    if (!user) {
      res.status(404).send({ msg: "User not found." });
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(404).send({ msg: err });
  }
};

const deleteUserById = (req, res) => {
  Users.destroy({ where: { id: parseInt(req.params.id) } })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => console.error(err));
};

const updateUser = async (req, res) => {
  try {
    const user = await Users.update({
      where: {
        id: parseInt(req.params.id)
      }
    });
    if (!user) {
      res.status(404).send({ msg: "User not found." });
    }
    res.status(200).send(user);
  } catch (err) {
    res.status(404).send({ msg: err });
  }
};

module.exports = {
  findUserById,
  deleteUserById,
  updateUser
};
