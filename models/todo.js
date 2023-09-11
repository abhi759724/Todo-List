const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    maxLength: 100,
  },
  dueDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("todo", todoSchema);
