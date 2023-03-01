require("../db/connection");
const UserInfo = require("../models/userSchema");

const getUserData = (req, res, next) => {
  const { userName, password } = req.query;
  UserInfo.findOne({ userName: userName }).then((user) => {
    console.log(user);
    if (password === user?.password) {
      res.status(200).json({
        status: 200,
        message: "login successful",
      });
    } else {
      res.status(200).json({
        status: 403,
        message: "username and password does not match",
      });
    }
  });
};

const storeUserData = (req, res, next) => {
  console.log(req.body);
  UserInfo.insertMany(req.body).then(() => {
    res.send({
      data: req.body,
      status: 200,
      message: "success",
    });
  });
};

module.exports = { getUserData, storeUserData };
