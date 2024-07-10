const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/todos");
        console.log("Connected to DB at mongodb://127.0.0.1:2707/todos");
    } catch (error) {
        console.log("Failed to connect to DB", error)
    }
}

module.exports = connectDB;