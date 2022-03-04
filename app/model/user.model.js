module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      // set(value) {
      //     // Перед записью в БД пароли следует "хэшировать" с помощью криптографической функции
      //     this.setDataValue('password', hash(value))
      //   },
    },
    role: {
      type: Sequelize.STRING,
      defaultValue: "user",
      allowNull: false,
    },
    active_board: {
      type: Sequelize.INTEGER,
    },
  });

  return User;
};
