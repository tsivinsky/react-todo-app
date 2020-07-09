// Import dependencies
import React from "react";

export default function TodoSettings({ id, onComplete, onDelete }) {
  return (
    <div className="todo-settings">
      <button onClick={() => onComplete(id)}>Complete</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
