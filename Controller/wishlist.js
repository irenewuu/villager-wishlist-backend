const Wishlist = require("../Models/wishlist")

const getWishlist = (req, res) => {
    Wishlist.find({})
    .populate('owner')
    .exec((err, villagers)=> {
        if(err) return res.status(404).send("wishlist not found");
        res.json(villagers)
    })
}

const addVillager = (req, res) => {
    var wishlist = new Wishlist()
    // var wishlist = Wishlist
    wishlist.villager = req.body.villager
    wishlist.user = req.body.user
    wishlist.save((err, data)=> {
        if(err) return res.status(500).send("unable to add to wishlist")
        console.log(data)
        res.status(200).send("added to wishlist")
        // res.json(data)
    })
}

module.exports = {
    getWishlist,
    addVillager
}