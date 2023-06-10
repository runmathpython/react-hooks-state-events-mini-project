import React from "react";
import Task from "./Task";

function TaskList({tasks, onRemoveTask}) {

  const listOfTasks = tasks.map((task) => (
        <Task key={task.text} text={task.text} category={task.category}
         onRemoveTask={onRemoveTask} />
  ))

  return <div className="tasks">{listOfTasks}</div>
}

export default TaskList;
