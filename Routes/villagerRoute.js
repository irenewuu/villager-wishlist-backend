const express = require("express");
const router = express.Router();
const { getVillagers, getVillagerById } = require("../Controller/villagers")
const authorizeUser = require('../Auth/auth')


router.get("/search", authorizeUser, getVillagers);
router.get("/profile/:_id", getVillagerById)


module.exports = router;