const router = require("express").Router();
const { getAllTodoItems, addNewTodoItem, deleteTodoItem } = require("../controllers/todos.controllers");

router.get("/", getAllTodoItems);

router.post("/add", addNewTodoItem);

router.delete("/delete", deleteTodoItem);

module.exports = router;