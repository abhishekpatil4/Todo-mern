import axios from "axios";

const TodoItem = ({ id, task, setTodos }) => {
    const handleDone = async () => {
        await axios.delete(import.meta.env.VITE_ENDPOINT + "/todos/delete", {
            data: {
                taskID: id
            }
        });
        setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
    }
    return <div style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: '0.6rem 1rem', backgroundColor: 'lightgray', margin: '3px', borderRadius: '6px' }}>
        <div style={{ fontSize: '20px' }}>{task}</div>
        <button onClick={handleDone} style={{ cursor: 'pointer', color: "white" }}>Done</button>
    </div>
}

export default TodoItem;