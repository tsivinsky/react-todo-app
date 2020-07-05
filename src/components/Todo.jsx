// Import dependencies
import React from "react";

const completedTodoStyle = {
  textDecoration: "line-through",
  opacity: "0.6",
};

const todoStyle = {
  textDecoration: "",
  opacity: "1",
};

export default function Todo({ id, text, completed, onComplete, onDelete }) {
  return (
    <div className="todo">
      <h3
        style={completed ? completedTodoStyle : todoStyle}
        onClick={() => onComplete(id)}
      >
        {text}
      </h3>
      <span onClick={() => onDelete(id)}>❌</span>
    </div>
  );
}
