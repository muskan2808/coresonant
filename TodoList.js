import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { fetchTodos } from "./Api";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }
    fetchData();
  }, []);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        title: newTask,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />{" "}
        &nbsp;
        <button className="btn btn-dark" onClick={handleAddTask}>
          Add
        </button>
      </div>
      <table className="table">
        <tr>
          <td>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onDelete={handleDeleteTask}
                onToggleComplete={handleToggleComplete}
              />
            ))}
          </td>
        </tr>
      </table>
    </div>
  );
}

export default TodoList;
