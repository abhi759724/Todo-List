// import schema

const todo = require("../models/todo");

// define route handler
exports.createTodo = async (req, res) => {
  try {
    // extract the title and description from req body
    const { title, description } = req.body;

    // create the new todo object and insert db in it
    const response = new todo({ title, description });
    await response.save();
    // Create a new Todo document
    // const newTodo = new todo({ title, description });

    // Save the document to the database
    // await newTodo.save();

    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
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
