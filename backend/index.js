const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const todosRouter = require("./routes/todos.routes");

app.use(bodyParser.json());

app.use("/todos", todosRouter);

app.listen(3000, () => {
    console.log("Listening on port 3000");
})