// require mongoose instance
const mongoose = require("mongoose");

// create Schema
const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    maxLength: 200,
  },
  category: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
});

// export
module.exports = mongoose.model("todo", todoSchema);
