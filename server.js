const express = require('express')
const mongoose = require('mongoose')
const app = express()
const config = require('./config')
const cors = require('cors')
const villagerRouter = require("./Routes/villagerRoute");

app.use(cors());

app.use(express.json());

mongoose.connect(config.MONGODB_URL, (e)=>{
    console.log(e, " connection success")
})


app.use(villagerRouter)





app.listen(3000, ()=>{
    console.log("server listening on 3000")
})