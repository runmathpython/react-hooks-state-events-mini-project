import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  function handleAddTask(newTask){
    setTasks([...tasks, newTask])
  }
  
  function handleRemoveTask(removedTask){
    setTasks(tasks.filter((task) => task.text !== removedTask))
  }

  const theTasks = tasks.filter
  ((task) => category === "All" || task.category === category)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category}
       onSelectCategory={setCategory} />
        <div className="tasks">
          <h2>The Tasks</h2>
          <NewTaskForm categories={CATEGORIES.filter
            ((category) => category !== "All")}
            onTaskFormSubmit={handleAddTask} />
          <TaskList onRemoveTask={handleRemoveTask} tasks={theTasks} />
        </div>
    </div>
  );
}

export default App;
