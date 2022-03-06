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

//Создаем бд
const db = {};

//Подрубаем сиквалайз для облегченного обращения к бд
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
//Добавляем таблицу в бд, импортируя модель
db.user = require("../model/user.model.js")(sequelize, Sequelize);
db.chat = require("../model/chat.model.js")(sequelize, Sequelize);
db.message = require("../model/message.model.js")(sequelize, Sequelize);
// db.setting = require("../model/setting.model.js")(sequelize, Sequelize);

//?RELATONSHIPS
db.user.belongsToMany(db.chat, { through: "userChats" });
db.chat.belongsToMany(db.user, { through: "userChats" });

db.chat.hasMany(db.message, { onDelete: "CASCADE" });
db.message.belongsTo(db.chat);

db.user.hasMany(db.message);
db.message.belongsTo(db.user);

// db.column.hasMany(db.task);
// db.task.belongsTo(db.column);

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
