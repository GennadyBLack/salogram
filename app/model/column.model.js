module.exports = (sequelize, Sequelize) => {
  const Column = sequelize.define("column", {
    order: {
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    background: {
      type: Sequelize.STRING,
      defaultValue: "grey",
    },
  });

  return Column;
};
