const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const villagerSchema = new Schema({
    _id: {type: mongoose.Schema.ObjectId},
    name: String,
    url: String,
    alt_name: String,
    title_color: String,
    text_color: String,
    id: String,
    image_url: String,
    species: String,
    personality: String,
    gender: String,
    birthday_month: String,
    birthday_day: String,
    sign: String,
    quote: String,
    phrase: String,
    clothing: String,
    islander: Boolean,
    debut: String,
    prev_phrases: Array,
    nh_details: Object,
    appearances: Array
});

const Villager = mongoose.model("villagers", villagerSchema);

module.exports = Villager