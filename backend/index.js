const express = require("express");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const todosRouter = require("./routes/todos.routes");
const connectDB = require("./db/config");

connectDB();

app.use(bodyParser.json());

app.use("/todos", todosRouter);

app.listen(3000, () => {
    console.log("Listening on port 3000");
})