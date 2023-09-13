// create the express instance
const express = require("express");
const app = express();

// load the config
require("dotenv").config();
const PORT = process.env.PORT || 4000;

// middleware the parse the json request body
app.use(express.json());

// import all the routes
const todoRoutes = require("./routes/todos");

// mount the api routes
app.use("/create-contact/", todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on the PORT: ${PORT}`);
});

const dbConnect = require("./config/database");
dbConnect();

// app.get("/", (req, res) => {
//   res.render("index");
// });
