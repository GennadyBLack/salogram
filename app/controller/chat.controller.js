const db = require("../config/db.config.js");
const Chat = db.board;

// FETCH all boards
exports.findAll = (req, res) => {
  Chat.findAll()
    .then((chats) => {
      // Send all boards to Client
      res.send(chats);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// // Find a Board by Id
exports.findById = (req, res) => {
  Chat.findOne({
    where: { id: req.params.chatId },
    include: { all: true, nested: true },
  })
    .then((Chat) => {
      res.send(Chat);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// Update a Board
exports.update = async (req, res) => {
  const id = req.params.chatId;
  await Chat.update(
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
  Chat.destroy({
    where: { id: id },
  })
    .then(() => {
      res.status(200).send("Board has been deleted!");
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

exports.createMessage = (req, res) => {
  try {
    Chat.findOne({ where: { id: req.params.userId } })
      .then((Chat) => {
        Chat.createMessage({
          ...req.body,
        });
        res.send(Chat);
      })
      .catch((err) => {
        res.status(500).send("Error -> " + err);
      });
  } catch (error) {
    console.log(error, "ERROR FROM USER CONROLLER");
  }
};
