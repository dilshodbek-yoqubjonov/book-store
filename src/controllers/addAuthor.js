const { readFile, writeFile } = require("../utils/fs");

const postAuthor = (req, res) => {
  let { fullname } = req.body;
  let author = readFile("author");

  let authors = { id: author.at(-1)?.id + 1 || 1, fullname };

  author.push(authors);
  writeFile("author", author);
  res.redirect("/add#posts");
};

module.exports = postAuthor;
