import React, { useState } from "react";

function TodoForm({ onAddTask }) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      onAddTask(newTask);
      setNewTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button onClick={handleAddTask}>Add</button>
    </div>
  );
}

export default TodoForm;
