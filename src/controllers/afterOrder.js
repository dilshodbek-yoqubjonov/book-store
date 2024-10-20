const { readFile, writeFile } = require("../utils/fs");

const getMonitoring = (req, res) => {
  let orders = readFile("order");
  let books = readFile("book");

  let authors = readFile("author");

  let author = books.map((el) => {
    el.authorId = authors.find((id) => id.id == el.authorId).fullname;
  });

  let key = orders.length;

  let myOrder = orders[key - 1];
  let myBook = books.find((el) => el.id == myOrder.bookId);
  res.render("afterOrdering", { myOrder, myBook });
};

module.exports = {
  getMonitoring,
};
