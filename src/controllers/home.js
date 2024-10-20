const { readFile } = require("../utils/fs");

const getHome = (req, res) => {
  let book = readFile("book");
  let category = readFile("category");
  let author = readFile("author");

  let books = book.map((el) => {
    el.categoryId = category.find((id) => id.id == el.categoryId).name;

    return el;
  });
  res.render("index", { books });
};

module.exports = {
  getHome,
};
