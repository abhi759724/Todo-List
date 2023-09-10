const express = require("express");

// create the instance of the router
const router = express.Router();

// import controller
const { createTodo } = require("../controllers/createToDO");

// map/add the controller
router.post("/createTodo", createTodo);

// export the route
module.exports = router;
