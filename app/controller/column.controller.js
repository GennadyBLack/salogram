const db = require("../config/db.config.js");
const Column = db.column;
const Board = db.board;

exports.createTask = (req, res) => {
  try {
    Column.findOne({ where: { id: req.params.columnId } })
      .then((Column) => {
        Column.createTask({
          ...req.body,
        });
        res.send(Column);
      })
      .catch((err) => {
        res.status(500).send("Error -> " + err);
      });
  } catch (error) {
    console.log(error, "ERROR FROM column CONROLLER");
  }
};

exports.create = (req, res) => {
  try {
    Board.findOne({ where: { id: req.params.boardId } })
      .then((Board) => {
        Board.createColumn({
          ...req.body,
        });
        res.send(Board);
      })
      .catch((err) => {
        res.status(500).send("Error -> " + err);
      });
  } catch (error) {
    console.log(error, "ERROR FROM column CONROLLER");
  }
};

// FETCH all columns
exports.findAll = (req, res) => {
  Column.findAll()
    .then((columns) => {
      // Send all columns to Client
      res.send(columns);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// Find a Column by Id
exports.findById = (req, res) => {
  Column.findOne({ where: { id: req.params.columnId }, include: "tasks" })
    .then((Column) => {
      res.send(Column);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// exports.findById = (req, res) => {
//   Column.findOne({ where: { id: req.params.columnId }, include: "tasks" })
//     .then((Column) => {
//       res.send(Column);
//     })
//     .catch((err) => {
//       res.status(500).send("Error -> " + err);
//     });
// };

// Update a Column
exports.update = (req, res) => {
  var Column = req.body;
  const id = req.params.columnId;
  Column.update(
    { name: req.body.name, age: req.body.age, active: req.body.active },
    { where: { id: req.params.columnId } }
  )
    .then(() => {
      res.status(200).send(Column);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// Delete a Column by Id
exports.delete = (req, res) => {
  const id = req.params.columnId;
  Column.destroy({
    where: { id: id },
  })
    .then(() => {
      res.status(200).send("Column has been deleted!");
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};
