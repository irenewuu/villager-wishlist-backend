const express = require('express')
const mongoose = require('mongoose')
const app = express()
const config = require('./config')
const cors = require('cors')
const villagerRouter = require("./Routes/villagerRoute");
const userRouter = require("./Routes/userRoute");
const wishlistRouter = require("./Routes/wishlistRoute");

app.use(cors());
app.use(express.json());

mongoose.connect(config.MONGODB_URL, (err)=>{
    if(err) return console.log(err, " connection success")
    console.log("connection success")
})


app.use(villagerRouter)
app.use(userRouter)
app.use(wishlistRouter)


app.listen(process.env.PORT || 3000, ()=>{
    console.log("server running")
})