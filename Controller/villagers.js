const Villager = require("../Models/villagers")

const getVillagers = (req, res)=>{
    Villager.find({}, (err, data)=>{
        if(err) return res.status(500).send("Something went wrong in db")
        // console.log(res.json(data))
        res.json(data)
    })
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