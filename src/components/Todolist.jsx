import React from "react";
import Todo from "./Todo";

export default function Todolist({ tasks }) {
  return (
    <div className="todos">
      {tasks.map((task, i) => (
        <Todo
          key={i}
          id={task._id}
          text={task.text}
          completed={task.completed}
        />
      ))}
    </div>
  );
}
