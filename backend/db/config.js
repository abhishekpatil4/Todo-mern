const mongoose = require('mongoose');
const dotenv = require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_ATLAS_URI);
        console.log("Connected to MongoDB Atlas");
    } catch (error) {
        console.log("Failed to connect to DB", error)
    }
}

module.exports = connectDB;