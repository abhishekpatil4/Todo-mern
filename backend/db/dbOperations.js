const fs = require('fs').promises;
const { detectContentType } = require('next/dist/server/image-optimizer');
const { v4: uuidv4 } = require('uuid');

const FILE_PATH = 'todolist.json';

async function readTodoList() {
    try {
        const data = await fs.readFile(FILE_PATH, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        if (error.code === 'ENOENT') {
            // File doesn't exist, return an empty array
            return [];
        }
        throw error;
    }
}

async function writeTodoList(todoList) {
    await fs.writeFile(FILE_PATH, JSON.stringify(todoList, null, 2));
}

async function addTask(task) {
    try {
        const todoList = await readTodoList();
        const newTask = {
            id: uuidv4(),
            task: task
        };
        console.log("newTask: ", newTask);
        todoList.push(newTask);
        await writeTodoList(todoList);
        console.log(`Task added: ${task}`);
        return newTask;
    } catch (error) {
        console.error('Error adding task:', error);
    }
}

async function deleteTask(id) {
    try {
        let todoList = await readTodoList();
        const initialLength = todoList.length;
        todoList = todoList.filter(task => task.id !== id);

        if (todoList.length === initialLength) {
            console.log(`No task found with id: ${id}`);
            return false;
        }

        await writeTodoList(todoList);
        console.log(`Task with id ${id} deleted`);
        return true;
    } catch (error) {
        console.error('Error deleting task:', error);
        return false;
    }
}

module.exports = { addTask, deleteTask };