const express = require('express')
const mongoose = require('mongoose')
const app = express()
const config = require('./config')
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

mongoose.connect(config.MONGODB_URL, (err)=>{
  if(err) return console.log(err, " connection unsuccessful")
  console.log("connection success")
})

app.use(villagerRouter)
app.use(userRouter)
app.use(wishlistRouter)

var whitelist = ["http://localhost:3001", 'https://acnh-villagerwishlist.vercel.app/']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  allowedHeaders:["Access-Control-Allow-Origin"],
  credentials:true
}
const io = new Server(server, cors(corsOptions)
);
  
  
  // chat function .......................................................
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/server.html');
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  // io.emit("change");
  socket.on("alert all", (txt, id)=>{
    io.emit("change", socket.id, txt, id);
  })
});

server.listen(PORT, (err)=>{
    if(err) return console.log(err, "port error")
  console.log(`listening on *:${PORT}`);
})
