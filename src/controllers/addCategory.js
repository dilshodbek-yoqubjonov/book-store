const { readFile, writeFile } = require("../utils/fs");

const postCategory = (req, res) => {
  let { name } = req.body;
  let category = readFile("category");

  let categories = { id: category.at(-1)?.id + 1 || 1, name };

  category.push(categories);
  writeFile("category", category);
  res.redirect("/add#cate");
};

module.exports = postCategory;
