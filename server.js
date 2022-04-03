var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const tokenSecret = "my-token-secret";

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

//=============== Routes====================
require("./app/route/message.route.js")(app);
require("./app/route/auth.route.js")(app);
require("./app/route/user.route.js")(app);
require("./app/route/chat.route.js")(app);

app.use(express.static("public"));
// Create a Server
const http = require("http").Server(app);
//Create socket
const io = require("socket.io")(http, config);
var server = http.listen(8081, function () {
  var host = server.address().host;
  var port = server.address().port;

  console.log(`App listening at ${port} ${host}`);
});
// Static files

// Socket setup

try {
  io.use(function (socket, next) {
    if (socket.handshake.auth && socket.handshake.auth.token) {
      jwt.verify(
        socket.handshake.auth.token,
        tokenSecret,
        function (err, response) {
          if (err) return next(new Error("Invalid JWT-Token"));

          socket.userID = response.data.id;
          socket.username = response.data.username;
          socket.decoded = response;
          next();
        },
        null
      );
    } else {
      next(new Error("Authentication error"));
    }
  }).on("connection", function (socket) {
    socket.join(`notify:${socket.userID}`); // подключаем пользователя к своей комнате.
    console.log(`join notify ${socket.userID}`);

    socket.emit(`connected`, { id: socket.userID });
    socket.on("openChat", (data) => {
      socket.join(`personal:${data.chatId}`); // подключаем пользователя к комнате чата.
    });
    socket.on("typing", (data) => {
      console.log(data, "socket Data");
      io.to(`personal:${data.chatId}`).emit("typing", data);
      // socket.broadcast.emit("typing", data);
    });
    socket.on("stopTyping", (data) => {
      io.to(`personal:${data.chatId}`).emit("stopTyping", data);
    });

    socket.on("joined", async (id) => {
      socket.broadcast.emit("joined", id);
    });
    socket.on("leave", (id) => {
      socket.broadcast.emit("leave", id);
    });
    socket.on("sendMessage", (data) => {
      console.log("hereeeeeeeeeeeeeeeeeeee", data);
      io.to(`notify:${data.userId}`).emit(`notify:${data.userId}`, data);
      io.to(`personal:${data.chatId}`).emit("sendMessage", data);
    });
    socket.on("disconnect", function () {
      console.log("A user disconnected");
    });
    socket.on("disconnect", function () {
      console.log(`User ID:${socket.userID} disconnected`);
    });
  });
} catch (e) {
  console.log(e);
} finally {
}
//
// io.on("connection", function (socket) {
//   let token = socket.handshake.auth.token;
//   console.log("Made socket connection");
//   socket.on("typing", (data) => {
//     console.log(data, "socket Data");
//     socket.broadcast.emit("typing", data);
//   });
//   socket.on("stopTyping", (data) => {
//     socket.broadcast.emit("stopTyping", data);
//   });
//   socket.on("joined", async (id) => {
//     socket.broadcast.emit("joined", id);
//   });
//   socket.on("leave", (id) => {
//     socket.broadcast.emit("leave", id);
//   });
//   socket.on("sendMessage", (data) => {
//     socket.broadcast.emit("sendMessage", data);
//   });
//   socket.on("disconnect", function () {
//     console.log("A user disconnected");
//   });
// });
