const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistSchema = new Schema ({
    user: {type: mongoose.Types.ObjectId, ref: "users"},
    villager: { type: mongoose.Types.ObjectId, ref: "villagers"}
})

const Wishlist = mongoose.model("wishlists", wishlistSchema)

module.exports = Wishlist