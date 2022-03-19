const Villager = require("../Models/villagers")

const getVillagers = (req, res)=>{
    Villager.find({}, (err, data)=>{
        if(err) return res.status(500).send("Something went wrong in db")
        res.json(data)
    })
    // comment out this limit to get all 480+ villagers
    .limit(10)
}

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