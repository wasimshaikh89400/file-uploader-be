const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const router = require("./router");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(router);

const port = process.env.APP_PORT || 8000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
