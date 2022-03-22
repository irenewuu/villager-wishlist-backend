const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const villagerSchema = new Schema({
    // _id: {type: mongoose.Schema.ObjectId},
    name: String,
    url: String,
    id: String,
    image_url: String,
    species: String,
    personality: String,
    gender: String,
    birthday_month: String,
    birthday_day: String,
    phrase: String,
    nh_details: Object,
});

const Villager = mongoose.model("villagers", villagerSchema);

module.exports = Villager