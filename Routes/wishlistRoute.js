const express = require('express')
const router = express.Router()
const {getWishlist, addVillager} = require("../Controller/wishlist")

router.get("/wishlist", getWishlist)
router.post("/wishlist", addVillager)
// router.post('/search', addVillager)

module.exports = router