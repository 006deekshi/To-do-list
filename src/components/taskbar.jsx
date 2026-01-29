import React from "react";
function Taskbar({ tasks , onDelete , onEdit }){
     return(
        <div className="task">
        <ol>
            {tasks.map((task,index) => (
            <li key={index}>
                <div className="task-bar">
                   <div className="item">
                    <p>{task}</p>
                   </div>
                   <div className="action-btn">
                    <button className="delete-btn" onClick={()=>{onDelete(index)}}>🗑</button>
                    <button className="edit-btn" onClick={() => {onEdit(index)}}>🖍</button>
                   </div>
                </div>
            </li>
            ))}
        </ol>
        </div>
     );
}
export default Taskbar;