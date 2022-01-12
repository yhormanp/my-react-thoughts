import { useState } from "react";

function TodoTask({ task, onRemoveTask,     onCompletedTask }) {
  const [isSelected, setIsSelected] = useState(false);

  const completingTask = (isCompleted) => {
    setIsSelected (isCompleted);
    onCompletedTask(task)
  }


  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={(e) => completingTask(e.target.checked)}
      ></input>
      <label>{task.name}</label>
       <button onClick={() => onRemoveTask(task)} > Delete Task</button> 
    </div>
  );
}

export default TodoTask;
