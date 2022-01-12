import { useState, useContext} from 'react'
import dataContext from './dataContext';

function TodoHead ({/* onAddNewTask */ }) {
    const [newTask, setNewTask] = useState("");

     const sharedContext = useContext(dataContext)
    const addNewTask = () => {

        let taskObject = {
            name: newTask,
            id: ((+new Date()).toString()),
            completed: false
        }
        sharedContext.onAddNewTask(taskObject);
        setNewTask("");
    }

    return (
        <div>
            <input type="text" placeholder="task to do" value={newTask} onChange ={(e) => setNewTask(e.target.value)}></input>
            <button onClick ={(e) => addNewTask(e)}>Add Task</button>
        </div>
    )
}

export default TodoHead;