// Import depedencies
import React from "react";

export default function TodoForm({ value, onValue }) {
  return (
    <div className="todo-form">
      <form>
        <input
          type="text"
          placeholder="What do you want to do?"
          id="task-input"
          defaultValue={value}
          onChange={(e) => (e.target.value ? onValue(e.target.value) : null)}
          onKeyDown={(e) => (e.keyCode === 13 ? e.preventDefault() : null)}
        />
      </form>
    </div>
  );
}
