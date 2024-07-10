const Todo = require("../db/models/todo.model");

const getAllTodoItems = async (req, res) => {
    try {
        res.send(await Todo.find());
    } catch (error) {
        res.send(error);
    }
}

const addNewTodoItem = async (req, res) => {
    const task = req.body.task;
    console.log("task: ", task);
    try {
        const newTask = await new Todo({
            task
        }).save();
        console.log("newTask: ", newTask);
        res.status(201).send(newTask);
    } catch (error) {
        res.send(error);
    }
}

const deleteTodoItem = async (req, res) => {
    const id = req.body.taskID
    try {
        const result = await Todo.findByIdAndDelete(id);
        if (result) {
            console.log('Document deleted successfully');
            return res.send("Document deleted successfully");
        } else {
            console.log('Document not found');
            return res.send("Document not found");
        }
    } catch (error) {
        console.error('Error deleting document:', error);
        res.send(error);
    }
}


module.exports = { getAllTodoItems, addNewTodoItem, deleteTodoItem };