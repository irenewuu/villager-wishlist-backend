const Villager = require("../Models/villagers")

const getVillagers = (req, res)=>{
    console.log(req.query)
    Villager.find({name: {$regex:req.query.name}}).skip(Number(req.query.offset)).limit(10).exec((err, data)=>{
        if(err) return res.status(500).send("Something went wrong in db")
        console.log(data)
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