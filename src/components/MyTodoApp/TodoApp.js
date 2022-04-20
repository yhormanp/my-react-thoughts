import { useState } from "react";
import { completeTodo } from "../../todoAppComponents/actions";
import dataContext from "./dataContext";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";

function TodoApp() {
  const [taskList, setTaskList] = useState(null);

  //   const myListOfTasks = [];
  const onAddNewTask = (taskToAdd) => {
    if (taskList === null) {
      setTaskList([taskToAdd]);
    } else {
      const copy = [...taskList];
      copy.push(taskToAdd);
      setTaskList(copy);
    }
  };

  const onCompletedTask = (completedTask) => {
    if (taskList) {
      const copyList = [...taskList];
      const indexToUpdate = copyList.findIndex(
        (x) => x.id === completedTask.id
      );
      copyList[indexToUpdate] = {
        ...copyList[indexToUpdate],
        completed: !completedTask.completed,
      };
      setTaskList(copyList);
      // console.log( copyList);
    }
  };

  const onRemoveTask = (taskToBeRemoved) => {
    if (taskList) {
      console.log(taskList);
      const indexToRemove = [...taskList].findIndex(
        (x) => x.id === taskToBeRemoved.id
      );
      let modList = [...taskList];
      modList.splice(indexToRemove, 1);
      setTaskList(modList);
    }
  };

  let contextToShare = {
    taskList,
    onAddNewTask,
    onCompletedTask,
    onRemoveTask,
  };

  return (
    <div>
      <dataContext.Provider value={contextToShare}>
        <TodoHead onAddNewTask={onAddNewTask}></TodoHead>
        {taskList && <span> Task List</span> && (
          <TodoList
            taskList={
              taskList
            } /*onRemoveTask={onRemoveTask} onCompletedTask={onCompletedTask} */
          ></TodoList>
        )}
      </dataContext.Provider>
    </div>
  );
}

export default TodoApp;
