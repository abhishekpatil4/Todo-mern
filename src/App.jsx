import TodoItem from "./components/todoItem";
import axios from "axios";
import { useState, useEffect } from "react";
import AddTodoItem from "./components/addTodoItem";

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = (await axios.get(import.meta.env.VITE_ENDPOINT + "/todos")).data;
        setTodos(data);
        console.log("data fetched");
      } catch (error) {
        console.log(error);
      }
    }
    getTodos();
  }, []);
  return <div>
    <h1 style={{ textAlign: "center", color:"white" }}>Todo</h1>
    <div style={{ maxWidth: '35rem', marginLeft: "auto", marginRight: "auto", marginTop: "5rem" }}>
      {
        todos.length > 0 ?
          todos.map((todo) =>
            <TodoItem key={todo._id} id={todo._id} task={todo.task} setTodos={setTodos} />
          )
          :
          <p style={{ textAlign: "center" }}>No data</p>
      }
    </div>
    <AddTodoItem setTodos={setTodos} />
  </div>
};

export default App;