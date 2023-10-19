module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define("book", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Book;
};
