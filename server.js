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


app.listen(process.env.PORT || 3000, ()=>{
    console.log("server running")
})





// chat function .......................................................
const http = require('http')
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {cors:{
    origin:["http://localhost:3001"],
    allowedHeaders:["Access-Control-Allow-Origin"],
    credentials:true
}

});

const PORT = process.env.PORT || 8888;

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

server.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
  });

//....................................................................


