const express = require("express");
const { getUserData, storeUserData } = require("./services/userServices");
const router = express.Router();

router.get("/api/getUser", getUserData);

router.post("/api/storeUserData", storeUserData);

module.exports = router;
