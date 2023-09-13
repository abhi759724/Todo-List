// import schema
const todo = require("../models/todo");

// define route handler
exports.createTodo = async (req, res) => {
  todo
    .create({
      description: req.body.description,
      category: req.body.category,
      dueDate: req.body.dueDate,
    })
    .then((newContacts) => {
      res.redirect("back");
    })
    .catch((err) => {
      console.error("ERROR:", err);
      res.status(500).json({
        message: "Internal Error",
      });
    });
};
