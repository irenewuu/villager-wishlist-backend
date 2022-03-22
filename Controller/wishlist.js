const Wishlist = require("../Models/wishlist")

// get all the villagers in the users wishlist
const getWishlist = (req, res) => {
    // console.log(req.query.user, "user?")
    Wishlist.find({user: req.user.id}, (err, data)=> {
        if(err ) return res.status(500).send("wishlist not found");
        res.status(200).json(data)
    })
    .populate('villager')
}

// add villager to users wishlist
const addVillager = (req, res) => {
    var wishlist = new Wishlist()
    wishlist.villager = req.body.villager
    wishlist.user = req.user.id

    wishlist.save((err, data)=> {
        if(err) return res.status(500).send("unable to add to wishlist")
        console.log(data)
        res.status(200).send(data)
    })
}

// remove villager form users wishlist
const removeVillager = (req, res) => {
    // console.log(req, ' req')
    Wishlist.findOneAndDelete({villager: req.query.villager, user: req.user.id}, (err, data)=>{
        if(err) return res.status(500).send("unable to delete from wishlist")
        res.status(200).json(data)
    })
}

module.exports = {
    getWishlist,
    addVillager,
    removeVillager
}