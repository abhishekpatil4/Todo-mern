import axios from "axios";
import EditItemModal from "./editItemModal";
import { useState } from "react";
const TodoItem = ({ id, task, setTodos }) => {
    const [showEditModel, setShowEditModel] = useState(false);
    const handleDone = async () => {
        try {
            await axios.delete(import.meta.env.VITE_ENDPOINT + "/todos/delete", {
                data: {
                    taskID: id
                }
            });
        } catch (error) {
            console.log(error);
        }
        setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
    }
    const handleEdit = async () => {
        try {

        } catch (error) {

        }
    }
    return <div style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: '0.6rem 1rem', backgroundColor: 'lightgray', margin: '5px', borderRadius: '6px' }}>
        <div style={{ fontSize: '20px' }}>{task}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
            <button onClick={()=>setShowEditModel(true)} style={{ cursor: 'pointer', color: "white", height: '2rem' }}>Edit</button>
            <button onClick={handleDone} style={{ cursor: 'pointer', color: "white", height: '2rem' }}>Done</button>
        </div>
        {
            showEditModel && <EditItemModal curTask={task} setShowEditModel={setShowEditModel}/>
        }
    </div>
}

export default TodoItem;