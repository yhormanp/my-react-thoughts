import TodoTask from "./TodoTask";
import {useContext} from 'react'
import dataContext from "./dataContext";
import './styles.css'

function TodoList({ /* taskList, onRemoveTask, onCompletedTask */}) {
    
const sharedContext = useContext(dataContext);

  const filteringTasks = (isCompleted) => {
    return sharedContext.taskList.filter((task) => task.completed === isCompleted);
  };

  const renderingTasks = (filteredTasks, title) => {
    return (
      <div className="taskList">
        <label className="title"> {title}</label>
        <div>
          {filteredTasks.map((task) => {
            return (
              <TodoTask
                key={task.id}
                task={task}
                onRemoveTask={sharedContext.onRemoveTask}
                onCompletedTask={sharedContext.onCompletedTask}
              ></TodoTask>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <div>
        {renderingTasks(filteringTasks(false), "pending tasks")}
      </div>
      <div>
        {renderingTasks(filteringTasks(true), "completed tasks")}
      </div>
    </>
  );
}

export default TodoList;
