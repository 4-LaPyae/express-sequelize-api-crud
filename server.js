const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const bookRoute = require("./routes/bookRoute");
app.use("/book", bookRoute);
app.listen(5000, () => console.log("server running on port 5000"));
