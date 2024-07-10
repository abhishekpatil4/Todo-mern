import TodoItem from "./components/todoItem";

const App = () => {
  return <div>
    <h1 style={{ textAlign: "center" }}>Todo items</h1>
    <div style={{ maxWidth: '30rem', marginLeft:"auto", marginRight:"auto", marginTop:"5rem" }}>
      <TodoItem id={10} task={"go for a run"} />
      <TodoItem id={10} task={"read a book"} />
      <TodoItem id={10} task={"checkout new tech"} />
    </div>
  </div>
};

export default App;