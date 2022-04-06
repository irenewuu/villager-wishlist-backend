require("dotenv").config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
// const config = require('./config')
const cors = require('cors')
const PORT = process.env.PORT || 3000;


const http = require('http')
const server = http.createServer(app);
const { Server } = require("socket.io");

const villagerRouter = require("./Routes/villagerRoute");
const userRouter = require("./Routes/userRoute");
const wishlistRouter = require("./Routes/wishlistRoute");

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL 
  // || config.MONGODB_URL
  , (err)=>{
  if(err) return console.log(err, " connection unsuccessful")
  console.log("connection success")
})

app.use(villagerRouter)
app.use(userRouter)
app.use(wishlistRouter)

// chat function .......................................................
var corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001", 'https://acnh-villagerwishlist.vercel.app/'],
  allowedHeaders:"Access-Control-Allow-Origin",
  credentials:true
}
const io = new Server(server, {cors:{corsOptions}});
  
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/server.html');
});

io.on('connection', (socket) => {
  socket.on("alert all", (txt, id)=>{
    io.emit("change", socket.id, txt, id);
  })
});
// chat function end ...................................................

server.listen(PORT, (err)=>{
  if(err) return console.log(err, "port error")
  console.log(`listening on *:${PORT}`);
})
