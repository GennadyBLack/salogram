module.exports = function (app) {
  const boards = require("../controller/board.controller.js");

  // Retrieve all Boards
  app.get("/api/boards", boards.findAll);

  // Retrieve a single Board by Id
  app.get("/api/boards/:boardId", boards.findById);

  // Update a Customer with Id
  app.patch("/api/boards/:boardsId", boards.update);

  // Delete a Customer with Id
  app.delete("/api/boards/:boardsId", boards.delete);
};
