module.exports = (sequelize, Sequelize) => {
  const Board = sequelize.define("board", {
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    background: {
      type: Sequelize.STRING,
      defaultValue: "pink",
    },
  });

  return Board;
};
