"use strict";

var db = require("../mysql-orm/connection");

var User = require("../user/userModel"); // const User = db.user;


module.exports = function (req, res, next) {
  var token = req.header("x-auth");
  console.log(User);
  User.findByToken(token).then(function (user) {
    if (!user) return new Promise.reject();
    console.log(req);
    next();
  })["catch"](function (err) {
    res.status(401).send({
      msg: err
    });
  });
};