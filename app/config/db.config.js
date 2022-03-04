//Setup Sequelize-PostgreSQL
const env = require("./env.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  // operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//habr.com/ru/post/566036/
//Models/tables
db.task = require("../model/task.model.js")(sequelize, Sequelize);
db.user = require("../model/user.model.js")(sequelize, Sequelize);
db.board = require("../model/board.model.js")(sequelize, Sequelize);
db.column = require("../model/column.model.js")(sequelize, Sequelize);

//?RELATONSHIPS
db.user.hasMany(db.board);
db.board.belongsTo(db.user);

db.board.hasMany(db.column);
db.column.belongsTo(db.board);

db.column.hasMany(db.task);
db.task.belongsTo(db.column);

// db.role = require("../models/role.model.js")(sequelize, Sequelize);

// db.role.belongsToMany(db.user, {
//   through: "user_roles",
//   foreignKey: "roleId",
//   otherKey: "userId"
// });
// db.user.belongsToMany(db.role, {
//   through: "user_roles",
//   foreignKey: "userId",
//   otherKey: "roleId"
// });

// db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
