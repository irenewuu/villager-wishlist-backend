const Wishlist = require("../Models/wishlist")
const Villager = require("../Models/villagers") 
const User = require("../Models/user")

const getWishlist = (req, res) => {
    
    Wishlist.find({user: req.query.user}, (err, data)=> {
        if(err) return res.status(404).send("wishlist not found");
        console.log(data, "whats in here")
        // console.log(data[1].villager, "villager id?")
        res.json(data)
    })
    .populate('villager')


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

const removeVillager = (req, res) => {
    console.log(req, ' req bodyyyyyyyyy???')
    Wishlist.findByIdAndRemove({villager: req.params.villager}, (err, data)=>{
        if(err) return res.status(500).send("unable to delete from wishlist")
        res.status(200).json(data)
    })
}

module.exports = {
    getWishlist,
    addVillager,
    removeVillager
}