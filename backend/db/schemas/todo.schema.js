const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
})

module.exports = todoSchema;