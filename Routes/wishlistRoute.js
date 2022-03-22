const express = require('express')
const router = express.Router()
const {getWishlist, addVillager, removeVillager} = require("../Controller/wishlist")
const authUser = require('../Auth/auth')

router.get("/wishlist", authUser, getWishlist)
router.post("/wishlist", authUser, addVillager)
router.delete('/wishlist', authUser, removeVillager)

module.exports = router