const express = require('express')
const router = express.Router()
const {getWishlist, addVillager, removeVillager} = require("../Controller/wishlist")

router.get("/wishlist", getWishlist)
router.post("/wishlist", addVillager)
router.delete('/wishlist', removeVillager)

module.exports = router