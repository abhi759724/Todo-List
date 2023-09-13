// import schema

const todo = require("../models/todo");

// define route handler
exports.deleteTodo = async (req, res) => {
  try {
    // extract the id from req parameters
    const { id } = req.params;

    await todo.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Todo Deleted Successfully",
    });

    // catch and show the error
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
