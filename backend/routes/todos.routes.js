const router = require("express").Router();
const { getAllTodoItems, addNewTodoItem, deleteTodoItem } = require("../controllers/todos.controllers");

router.get("/", getAllTodoItems);

router.get("/add", addNewTodoItem);

router.get("/delete", deleteTodoItem);

module.exports = router;