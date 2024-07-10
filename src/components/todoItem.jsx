const TodoItem = ({ id, task }) => {
    const handleComplete = () => {
        console.log("working...");
    }
    return <div style={{display:"flex", justifyContent:"space-between", gap:10, padding:'0.6rem 1rem', backgroundColor:'lightgray', margin:'3px', borderRadius:'6px'}}>
        <div style={{fontSize:'20px'}}>{task}</div>
        <button onClick={handleComplete} style={{cursor:'pointer', color:"white"}}>Done</button>
    </div>
}

export default TodoItem;