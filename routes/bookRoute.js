const router = require("express").Router();
const bookController = require("../controllers/bookController");
router.route("/").get(bookController.index).post(bookController.create);

module.exports = router;
