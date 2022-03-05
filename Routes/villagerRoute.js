const express = require("express");
const router = express.Router();
const { getVillagers, getVillagerById } = require("../Controller/villagers")


router.get("/search", getVillagers);
router.get("/profile/:_id", getVillagerById)


module.exports = router;