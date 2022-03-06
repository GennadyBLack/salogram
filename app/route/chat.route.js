module.exports = function (app) {
  const chats = require("../controller/board.controller.js");

  // Retrieve all Boards
  app.get("/api/chats", chats.findAll);

  // Retrieve a single Board by Id
  app.get("/api/chats/:chatId", chats.findById);

  // Update a Chat with Id
  app.patch("/api/chats/:chatId", chats.update);

  // Delete a Customer with Id
  app.delete("/api/chats/:chatId", chats.delete);

  //CREATE MESSAGE
  app.post("/api/chats/:chatId/message", column.createMessage);
};
