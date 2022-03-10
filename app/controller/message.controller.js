const db = require("../config/db.config.js");
const Message = db.message;
const Chat = db.chat;

// FETCH all boards
exports.findAll = async (req, res) => {
  await Message.findAll({
    where: { chatId: req.params.chatId },
    include: "user",
  })
    .then((messages) => {
      // Send all boards to Client
      res.status(200).send(messages);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// // Find a Board by Id
exports.findById = (req, res) => {
  Message.findOne({
    where: { id: req.params.messageId },
    include: { all: true, nested: true },
  })
    .then((Message) => {
      res.send(Message);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// Update a Board
exports.update = async (req, res) => {
  const id = req.params.messageId;
  await Message.update(
    { ...req.body.data },
    {
      where: {
        id: id,
      },
    }
  );
};

// Delete a Board by Id
exports.delete = (req, res) => {
  const id = req.params.boardId;
  Message.destroy({
    where: { id: id },
  })
    .then(() => {
      res.status(200).send("Board has been deleted!");
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};
