const { readFile, writeFile } = require("../utils/fs");

const getOrder = (req, res) => {
  let { id } = req.params;
  id = id * 1;

  let book = readFile("book");
  let authors = readFile("author");

  /// kitobning avtor ismini ovoldik
  let books = book.map((el) => {
    el.authorId = authors.find((ids) => ids.id == el.authorId).fullname;
    return el;
  });

  let orders = book.find((el) => el.id == id);
  if (id) {
    res.render("order", { orders });
  } else {
    res.redirect("/");
  }
};

const postOrder = (req, res) => {
  let { fullname, phone, address, bookId, mount } = req.body;

  let order = readFile("order");
  let book = readFile("book");

  let author = readFile("author");

  let books = book.map((el) => {
    el.authorId = author.find((id) => id.id == el.authorId).fullname;
    return el;
  });
  mount = mount * 1;
  bookId = bookId * 1;

  let myBook = book.find((el) => el.id == bookId);

  let mineOrders = {
    id: order.at(-1)?.id + 1 || 1,
    bookId: bookId,
    clientName: fullname,
    clientPhone: phone,
    count: mount,
    address: address,
    totalPrice: mount * myBook.price,
  };

  order.push(mineOrders);

  writeFile("order", order);
  res.redirect("/end");
};

module.exports = {
  getOrder,
  postOrder,
};
