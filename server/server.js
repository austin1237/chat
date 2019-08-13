const app = require('express')();
const bodyParser = require("body-parser");
const http = require('http').Server(app);
const io = require('socket.io')(http);
const sockets = require('./sockets');
const db = require("./data").getDb(process.env);
const port = process.env.PORT || 8080;
const messageRouter = require("./routers/messageRouter.js");

// Attach Middleware
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);



// Injects the db into all routes
app.use("/", (req, res, next) => {
  req.db = db;
  return next();
});

app.use("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

http.listen(port, ()=>{
  console.log('listening on *:' + port);
});

// Spin up websockets
sockets.setUp(io, db)

// Attach Http Routes
messageRouter.setUpRoutes(app);