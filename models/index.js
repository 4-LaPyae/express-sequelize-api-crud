const dbconfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
  host: dbconfig.HOST,
  dialect: dbconfig.dialect,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.books = require("./bookModel.js")(sequelize, DataTypes);
db.sequelize.sync({ force: false }).then(() => console.log("re-sync done"));

module.exports = db;
