const { readFile } = require("../utils/fs");
const { sign } = require("../utils/jwt");
const admin = (req, res) => {
  res.render("adminLogin");
};

const checkAdmin = (req, res) => {
  let { username, password } = req.body;

  let admins = readFile("admin");

  let user = admins.find(
    (el) => el.username == username && el.password == password
  );

  if (!user) {
    res.redirect("/admin");
  }

  if (user) {
    let token = sign({ id: user.id });

    res.cookie("access_token", token);
    res.redirect("/add#main");
  }
};

module.exports = {
  admin,
  checkAdmin,
};
