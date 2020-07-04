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

export default function Todo({
  id,
  text,
  completed,
  count,
  onComplete,
  onDelete,
}) {
  // TODO: Now, when I complete todo, this component will not re-render. I need to subscribe it for store changes
  return (
    <div
      className="todo"
      data-gap={count === "first" || count === "last" ? "false" : "true"}
    >
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
