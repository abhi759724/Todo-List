// import schema

const todo = require("../models/todo");

// define route handler to delete todo list
exports.deleteTodo = async (req, res) => {
  const id = req.query.id;
  todo
    .findByIdAndDelete({ _id: id })
    .exec()
    .then(() => {
      return res.redirect("back");
    })
    .catch((err) => {
      console.log(err);
    });
};
