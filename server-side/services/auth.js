const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../mysql-orm/connection");

const Users = db.user;

const signUp = async (req, res) => {
  const salt = await bcrypt.genSalt();
  req.body.password = await bcrypt.hash(req.body.password, salt);
  try {
    const user = await Users.create(req.body);
    const token = createJWToken(user.id);
    delete user.password;
    user.token = token;
    console.log(token);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

const createJWToken = id => {
  return jwt.sign({ id }, process.env.SECRET, {
    expiresIn: 10800 //3h
  });
};

const logIn = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        email: req.body.email
      }
    });
    if (!user) {
      return res.status(404).send({ msg: "No user found." });
    } else {
      const authUser = await bcrypt.compare(req.body.password, user.password);
      if (!authUser) {
        res
          .status(401)
          .send({ accessToken: null, message: "Invalid password" });
      }
      const token = createJWToken(user.id);
      console.log(user);
      res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        accessToken: token
      });
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = {
  signUp,
  logIn
};
