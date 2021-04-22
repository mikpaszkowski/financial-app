const db = require("../mysql-orm/connection");

module.exports = (req, res, next) => {
  const token = req.header("x-access-token");
  console.log(JSON.stringify(req.headers));
  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  db.user.prototype
    .findByToken(token)
    .then(user => {
      if (!user) return new Promise.reject();

      req.user = user;
      req.token = token;
      next();
    })
    .catch(err => {
      res.status(401).send({ msg: err });
    });
};
