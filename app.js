const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// updated path

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books
Mongo_URL="mongodb+srv://root:Ashutosh@cluster0.5tscpdi.mongodb.net/test"



mongoose
  .connect(Mongo_URL)
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(8080, () => console.log("Server is running on port 8080"));
  })
  .catch((err) => console.log(err));

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
