const todos = require("../todolist.json");

const getAllTodoItems = (req, res) => {
    console.log("todos: ", todos);
    res.send("all todos");
}

const addNewTodoItem = (req, res) => {
    res.send("add new");
}

const deleteTodoItem = (req, res) => {
    res.send("delete item");
}

module.exports = { getAllTodoItems, addNewTodoItem, deleteTodoItem };