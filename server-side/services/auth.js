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
    let response = {};
    response.user = user;
    response.token = token;
    res.status(201).json(response);
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
  console.log(req.body);
  try {
    const user = await Users.findOne({
      where: {
        email: req.body.user.email
      }
    });
    if (!user) {
      return res.status(404).send({ msg: "No user found." });
    } else {
      const authUser = await bcrypt.compare(
        req.body.user.password,
        user.password
      );
      if (!authUser) {
        res
          .status(401)
          .send({ accessToken: null, message: "Invalid password" });
      }
      const token = createJWToken(user.id);
      const response = {};
      response.user = user;
      response.token = token;
      console.log(response.token);
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = {
  signUp,
  logIn
};
