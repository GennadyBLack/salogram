var express = require("express");
var app = express();
var bodyParser = require("body-parser");
const cors = require("cors");
// import { Server } from "socket.io";
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

// Create a Server
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(`App listening at ${port} ${host}`);
});
