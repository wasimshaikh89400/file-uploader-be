const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const UserInfoData = mongoose.model("USERINFO", userSchema);

module.exports = UserInfoData;
