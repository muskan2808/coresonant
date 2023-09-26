import React from "react";

function TodoItem({ todo, onDelete, onToggleComplete }) {
  const { id, title, completed } = todo;

  return (
    <div>
      <table
        className="table table-striped table-dark"
        style={{ border: "1px" }}
      >
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">completed</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          <tr scope="row">
            <td className="text-left" style={{ width: "5%" }}>
              {id}
            </td>
            <td className="text-left" style={{ width: "50%" }}>
              {title}
            </td>
            <td className="text-left" style={{ width: "25%" }}>
              {completed}
            </td>
            <td className="text-left">
              <button className="btn btn-success" onClick={() => onDelete(id)}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TodoItem;
