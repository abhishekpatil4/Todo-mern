import { useState } from "react";
import axios from "axios";
const EditItemModal = ({ curTaskId, curTask, setShowEditModel, setTodos }) => {
    const [task, setTask] = useState(curTask);
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.patch(import.meta.env.VITE_ENDPOINT + "/todos/update", {
                taskID: curTaskId,
                task: task
            });
            console.log(response);
            setTodos((prev) => prev.map((todo) => todo._id === curTaskId ? { ...todo, task: task } : todo));
        } catch (error) {
            console.log(error);
        } finally {
            setShowEditModel(false);
        }
    }
    return <div style={{ position: 'absolute', backgroundColor: '#4d4d4d', color: 'white', borderRadius: '8px', left: '50%', top: '50%', transform: "translate(-50%, -50%)", height: '10rem', width: '40rem' }}>
        <button onClick={() => setShowEditModel(false)} style={{ backgroundColor: '#db4242', position: 'absolute', right: 10, top: 10, color: 'white', padding: "0.001rem 0.6rem" }}>X</button>
        <h3 style={{ textAlign: "center" }}>Edit Task</h3>
        <form onSubmit={handleUpdate} style={{ display: 'flex', justifyContent: "center", gap: 10, marginTop: '2.5rem', alignItems: 'center' }}>
            <input required value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="new task..." style={{ height: '2rem', minWidth: "20rem", fontSize: '18px', borderRadius: "4px", border: "1px solid gray", padding: "0rem 0.8rem" }} />
            <button style={{ color: 'white', padding: "0.3rem 1.5rem" }}>Update</button>
        </form>
    </div>
}

export default EditItemModal;