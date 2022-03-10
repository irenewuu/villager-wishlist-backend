const express = require("express");
const router = express.Router();
const { getVillagers, getVillagerById } = require("../Controller/villagers")
const authoriseUser = require('../Auth/auth')


router.get("/search", authoriseUser, getVillagers);
router.get("/profile/:_id", getVillagerById)


module.exports = router;