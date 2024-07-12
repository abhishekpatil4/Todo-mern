import axios from "axios";
import { useState } from "react";

const AddTodoItem = ({ setTodos }) => {
    const [task, setTask] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (task.trim() === "") {
            alert("Please enter the task");
            return;
        }
        try {
            const res = await axios.post(import.meta.env.VITE_ENDPOINT + "/todos/add", {
                task: task
            })
            setTask("");
            setTodos((prev) => [...prev, res.data]);
        } catch (error) {
            console.log(error);
        }
    }
    return <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: "center", gap: 10, marginTop: '5rem', alignItems: 'center' }}>
        <input required value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="new task..." style={{ height: '2rem', minWidth: "20rem", fontSize: '18px', borderRadius: "4px", border: "1px solid gray", padding: "0rem 0.8rem" }} />
        <button style={{ color: 'white', padding: "0.3rem 1.5rem" }}>Add</button>
    </form>
}

export default AddTodoItem;