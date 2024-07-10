const mongoose = require("mongoose");
const todosSchema = require("../schemas/todo.schema");

const Todo = mongoose.model("Todo", todosSchema);

module.exports = Todo;