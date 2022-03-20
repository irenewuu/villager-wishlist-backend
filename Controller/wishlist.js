const Wishlist = require("../Models/wishlist")

const getWishlist = (req, res) => {
    Wishlist.find({user: req.query.user}, (err, data)=> {
        if(err) return res.status(500).send("wishlist not found");
        res.status(200).json(data)
    })
    .populate('villager')
}

const addVillager = (req, res) => {
    var wishlist = new Wishlist()
    wishlist.villager = req.body.villager
    wishlist.user = req.body.user

    // Wishlist.find({user: req.query.user, villager: req.query.villager}, (err, data)=>{
    //     if(err) return res.status(500).send("not found")
    //     if(data) return res.status(404).send("data already exist")
    //     res(true)
    // })

    wishlist.save((err, data)=> {
        if(err) return res.status(500).send("unable to add to wishlist")
        console.log(data)
        res.status(200).send("added to wishlist")
    })
}

const removeVillager = (req, res) => {
    console.log(req, ' req')
    Wishlist.findOneAndDelete({villager: req.query.villager, user: req.query.user}, (err, data)=>{
        if(err) return res.status(500).send("unable to delete from wishlist")
        res.status(200).json(data)
    })
}

module.exports = {
    getWishlist,
    addVillager,
    removeVillager
}