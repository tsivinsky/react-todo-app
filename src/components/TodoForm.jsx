// Import depedencies
import React from "react";

export default function TodoForm({ onAdd }) {
  return (
    <form id="add-todo-form">
      <input
        type="text"
        placeholder="What do you want to do?"
        onKeyDown={(e) => (e.keyCode === 13 ? onAdd(e) : null)}
      />
    </form>
  );
}
