module.exports = function (app) {
  const messages = require("../controller/board.controller.js");

  // Retrieve all Boards
  app.get("/api/messages", messages.findAll);

  // Retrieve a single Board by Id
  app.get("/api/messages/:chatId", messages.findById);

  // Update a Chat with Id
  app.patch("/api/messages/:chatId", messages.update);

  // Delete a Customer with Id
  app.delete("/api/messages/:chatId", messages.delete);
};
