const Villager = require("../Models/villagers")

// get villagers in search page
const getVillagers = (req, res)=>{
    Villager.find({}, (err, data)=>{
        if(err) return res.status(500).send("Something went wrong in db")
        res.json(data)
    })
}

// get individual villager information
const getVillagerById = (req, res) => {
    Villager.findById(req.params._id, (err, data) => {
        if(err) return res.status(404).send("not found")
        res.json(data)
    })
}

module.exports = {
    getVillagers,
    getVillagerById
}