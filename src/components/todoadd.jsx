import React, { useState } from "react";
import Taskbar from "./taskbar";
function ItemAdd(){
    const [task,setTasks] = useState([]);
    const [newtask,setNewtask] = useState("");
    function add(){
       if(newtask.trim()=="") return;
       setTasks([...task,newtask]);
       setNewtask("");
    }
    function handleDelete(index){
        const updatedtasks = task.filter((_,i) => i!==index)
        setTasks(updatedtasks)
    }
    function handleEdit(index){
        const t = prompt("Edit Task: ",task[index]);
        if(t){
            const updatedtasks = [...task]
            updatedtasks[index] = t;
            setTasks(updatedtasks)
        }
    }

    return(
        <div className="container">
            <button className="first-icon">🗒</button>
            <h1>Add Your Item Here</h1>
            <div className="input-box">
                <button className="icon">✎</button>
                <input type="text" placeholder="add Items" value={newtask} onChange={(e)=>{setNewtask(e.target.value)}}></input>
                <button className="add-btn" onClick={add}>+</button>
            </div>
            <Taskbar tasks={task} onDelete={handleDelete} onEdit={handleEdit}/>
        </div>
    )
}
export default ItemAdd;