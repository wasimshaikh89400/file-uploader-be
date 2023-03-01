const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

const db = process.env.DB_CONNECTION;

mongoose
  .connect(db)
  .then(() => {
    console.log("connection established");
  })
  .catch((err) => console.log(err));
