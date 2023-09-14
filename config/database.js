// create the mongoose instance
const mongoose = require("mongoose");
require("dotenv").config();

// DB connection

const dbConnect = () => {
  mongoose
    .connect(process.env.dataBaseUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection is Successfull");
    })
    .catch((err) => {
      console.log("Issue in DB Connection");
      console.error(err.message);
      process.exit(1);
    });
};

// exports the db connection;
module.exports = dbConnect;
