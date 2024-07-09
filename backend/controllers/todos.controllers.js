const todos = require("../db/todolist.json");
const { addTask, deleteTask } = require("../db/dbOperations");

const getAllTodoItems = (req, res) => {
    console.log("req.body: ", req.body);
    res.send(todos);
}

const addNewTodoItem = (req, res) => {
    addTask(req.body.task);
    res.send("Task added");
}

const deleteTodoItem = (req, res) => {
    res.send("delete item");
}

module.exports = { getAllTodoItems, addNewTodoItem, deleteTodoItem };