const { readFile, writeFile } = require("../utils/fs");
const getAdminPanel = (req, res) => {
  let books = readFile("book");
  let author = readFile("author");
  let categories = readFile("category");
  let orders = readFile("order");

  res.render("adminPanel", { books, author, categories, orders });
};

const postAdminPanel = (req, res) => {
  let { title, categoryId, authorId, description, count, image, price } =
    req.body;

  let books = readFile("book");

  let book = {
    id: books.at(-1)?.id + 1 || 1,
    title,
    categoryId,
    authorId,
    description,
    count,
    image,
    price,
  };
  books.push(book);

  writeFile("book", books);
  res.redirect("/add#main");
};

module.exports = {
  getAdminPanel,
  postAdminPanel,
};
