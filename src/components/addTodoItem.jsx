import axios from "axios";
import { useState } from "react";

const AddTodoItem = ({ setTodos }) => {
    const [task, setTask] = useState();
    const handleAdd = async () => {
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
    return <div style={{ display: 'flex', justifyContent: "center", gap: 10, marginTop: '5rem', alignItems: 'center' }}>
        <input value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="new task..." style={{ height: '2rem', minWidth: "20rem", fontSize: '18px', borderRadius: "4px", border: "1px solid gray", padding: "0rem 0.4rem" }} />
        <button style={{ color: 'white', padding: "0.3rem 1.5rem" }} onClick={handleAdd}>Add</button>
    </div>
}

export default AddTodoItem;