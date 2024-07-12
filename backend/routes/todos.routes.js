const router = require("express").Router();
const { getAllTodoItems, addNewTodoItem, deleteTodoItem, updateTodoItem } = require("../controllers/todos.controllers");

router.get("/", getAllTodoItems);

router.post("/add", addNewTodoItem);

router.delete("/delete", deleteTodoItem);

router.patch("/update", updateTodoItem);

module.exports = router;