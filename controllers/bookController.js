const db = require("../models");
const Book = db.books;

const index = async (req, res) => {
  const book = await Book.findAll({});
  res.status(200).json({
    message: "Book  lists",
    data: book,
  });
};
const create = async (req, res) => {
  const book = await Book.create(req.body);
  res.status(200).json({
    message: "Book create success",
    data: book,
  });
};

const detail = async (req, res) => {
  const book = await Book.findOne({ where: { id: req.params.id } });
  res.status(200).json({
    message: "Book Details",
    data: book,
  });
};
const update = async (req, res) => {
  const book = await Book.update(req.body, { where: { id: req.params.id } });
  res.status(200).json({
    message: "Book Update Success",
    data: book,
  });
};

const destory = async (req, res) => {
  await Book.destory({ where: { id: req.params.id } });
  res.status(200).json({
    message: "Book Details",
  });
};

module.exports = { index, create, detail, update, destory };
