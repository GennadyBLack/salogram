var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const cors = require("cors");
// const socket = require("socket.io");
const config = {
  cors: {
    origin: "*",
    credentials: false,
  },
};
const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(cors(corsOptions));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/config/db.config.js");
const User = db.user;
// force: true will drop the table if it already exists
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync with { force: true }");
  // initial();
});

// function initial() {
//   const user = User.create({
//     username: "admin",
//     email: "admin@mail.ru",
//     password: "admin",
//     role: "admin",
//   });
// }

//Routes
require("./app/route/auth.route.js")(app);
// require("./app/route/board.route.js")(app);
// require("./app/route/column.route.js")(app);
// require("./app/route/task.route.js")(app);
require("./app/route/user.route.js")(app);
app.use(express.static("public"));
// Create a Server
const http = require("http").Server(app);
const io = require("socket.io")(http, config);
var server = http.listen(8081, function () {
  var host = server.address().host;
  var port = server.address().port;

  console.log(`App listening at ${port} ${host}`);
});
// Static files

// Socket setup

io.on("connection", function (socket) {
  console.log(socket.connected);
  console.log("A user with ID: " + socket.id + " connected");
  console.log("Made socket connection");
});

// const app = require("express")();
// const http = require("http").Server(app);
// const io = require("socket.io")(http);
// const path = require("path");
// const DataBase = require("./database.js");
// const db = new DataBase();
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });
// io.on("connection", function (socket) {
//   console.log(io.sockets.connected);
//   console.log("A user with ID: " + socket.id + " connected");
// socket.on("disconnect", function () {
//     console.log("A user with ID: " + socket.id + " disconnected");
//   });
// // More Socket listening here.
//   // if (io.sockets.connected) console.log(io.sockets.connected);
//   // socket.emit("connections", Object.keys(io.sockets.connected).length);
// socket.on("chat-message", async (message) => {
//     const data = {
//       message: message.message,
//       user_id: socket.id,
//       name: message.user,
//     };
//     console.log(data);
//     const messageData = await db.storeUserMessage(data);
//     socket.broadcast.emit("chat-message", message);
//   });
// socket.on("typing", (data) => {
//     socket.broadcast.emit("typing", data);
//   });
// socket.on("stopTyping", () => {
//     socket.broadcast.emit("stopTyping");
//   });
// socket.on("joined", async (name) => {
//     let messageData = null;
//     const data = {
//       name,
//       user_id: socket.id,
//     };
//     const user = await db.addUser(data);
//     if (user === "User already exist") {
//       messageData = await db.fetchUserMessages(data);
//     }
//     // console.log(messageData);
//     socket.broadcast.emit("joined", messageData);
//   });
// socket.on("leave", (data) => {
//     socket.broadcast.emit("leave", data);
//   });
// });
// http.listen(3000, () => {
//   console.log("Listening on port *: 3000");
// });
