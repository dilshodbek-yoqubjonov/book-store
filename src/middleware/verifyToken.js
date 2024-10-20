
const { readFile } = require("../utils/fs");
const { verify } = require("../utils/jwt");

const verifyToken = (req, res, next) => {
    let admins = readFile("admin");

  let token = req.cookies.access_token;
  
  let admin = verify(token)

  let checkUser = admins.find(el => el.id == admin.id)
  if (checkUser) {
    next();
  } else {
    res.redirect("/admin");
  }
};

module.exports = verifyToken;
