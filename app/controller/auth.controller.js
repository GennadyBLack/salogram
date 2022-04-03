const bcrypt = require("bcrypt");
const rounds = 10;
const jwt = require("jsonwebtoken");
const tokenSecret = "my-token-secret";
const db = require("../config/db.config.js");
const User = db.user;
const Chat = db.chat;

// login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    await User.findOne({ where: { email: email } })
      .then((user) => {
        if (!user)
          res.status(404).json({ errors: "no user with that email found" });
        else {
          bcrypt.compare(password, user.password, (errors, match) => {
            if (errors) res.status(500).json({ error: errors });
            else if (match)
              res.status(200).json({ token: generateToken(user), user: user });
            else res.status(403).json({ error: "passwords do not match" });
          });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  } catch (error) {
    console.log(error);
  }
};

// register
exports.register = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    bcrypt.hash(password, rounds, (error, hash) => {
      if (error) res.status(500).json({ error: error });
      else {
        const newUser = User.build({
          email: email,
          password: hash,
          username: username,
          status: true,
        });
        newUser
          .save()
          .then((user) => {
            res.status(200).json({ token: generateToken(user), user: user });
          })
          .catch((error) => {
            res.status(500).json({ error: error });
          });
      }
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

function generateToken(user) {
  return jwt.sign({ data: user }, tokenSecret, { expiresIn: "24h" });
}
//me
exports.me = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
      include: "chats",
    })
      .then((user) => {
        if (user) {
          res.status(200).json({ user: user });
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error });
      });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
