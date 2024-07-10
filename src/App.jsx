import TodoItem from "./components/todoItem";
import axios from "axios";
import { useState, useEffect } from "react";

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
    <h1 style={{ textAlign: "center" }}>Todo items</h1>
    <div style={{ maxWidth: '30rem', marginLeft: "auto", marginRight: "auto", marginTop: "5rem" }}>
      {
        todos.length > 0 ?
          todos.map((todo) =>
            <TodoItem key={todo._id} id={todo._id} task={todo.task} setTodos={setTodos} />
          )
          :
          <p>No data</p>
      }
    </div>
  </div>
};

export default App;