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
    return <div style={{ display: "flex", justifyContent: "space-between", gap: 10, padding: '0.6rem 1rem', backgroundColor: 'lightgray', margin: '5px', borderRadius: '6px' }}>
        <div style={{ fontSize: '20px' }}>{task}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
            <button onClick={()=>setShowEditModel(true)} style={{ cursor: 'pointer', color: "white", height: '2rem', backgroundColor:'#db9137' }}>Edit</button>
            <button onClick={handleDone} style={{ cursor: 'pointer', color: "white", height: '2rem', backgroundColor:'#3d8f48' }}>Done</button>
        </div>
        {
            showEditModel && <EditItemModal curTaskId={id} curTask={task} setShowEditModel={setShowEditModel} setTodos={setTodos}/>
        }
    </div>
}

export default TodoItem;