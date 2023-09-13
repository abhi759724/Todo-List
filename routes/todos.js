const express = require("express");

// create the instance of the router
const router = express.Router();

// // import controller
// const { createTodo } = require("../controllers/createToDO");
// const { deleteTodo } = require("../controllers/deleteTodo");

// // map/add the controller
// router.post("/createTodo", createTodo);
// router.delete("/deleteTodo:id", deleteTodo);

router.get("/", (req, res) => {
  res.render("./index");
});

// export the route
// module.exports = router;
