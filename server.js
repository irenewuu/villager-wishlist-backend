const express = require('express')
const mongoose = require('mongoose')
const app = express()
const config = require('./villager-wishlist-backend/utils/config')
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.use("/". require("./routes/villagerRoute"));

mongoose.connect(config.MONGODB_URL, (e)=>{
    console.log(e)
})

app.get("/search", (req, res)=>{
})

app.listen(3000, ()=>{
    console.log("server listening on 3000")
})