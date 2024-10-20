const { readFile, writeFile } = require("../utils/fs");
const { sign } = require("../utils/jwt");

const getSignIn = (req, res) => {
  res.render("signin");
};

const login = (req, res) => {
  const { username, password } = req.body;
  let users = readFile("users");

  let user = users.find(
    (el) => el.username == username && el.password == password
  );

  if (!user) {
    res.redirect("/signin");
  }

  if (user) {
    let token = sign({ id: user.id });

    res.cookie("access_token", token);
    res.redirect("/");
  }
};

const register = (req, res) => {
  let { username, password, email } = req.body;

  let users = readFile("users");
  let checkUser = users.find((el) => el.username === username);

  let user = {
    id: users.at(-1)?.id + 1 || 1,
    username,
    email,
    password,
  };

  users.push(user);
  writeFile("users", users);

  let token = sign({ id: user.id }, "secretKEY");

  res.cookie("access_token", token);
  res.redirect("/");
};

module.exports = {
  getSignIn,
  login,
  register,
};
