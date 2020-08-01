// Import dependencies
import React from "react";
import { useSwipeable } from "react-swipeable";

export default function Todo({ id, text, completed, onComplete, onRemove }) {
  const handlers = useSwipeable({
    // Event for completing task
    onSwipedLeft: (e) => {
      if (e.deltaX >= 100) {
        onComplete(id);
      }
    },
    // Event for removing task
    onSwipedRight: (e) => {
      if (e.deltaX <= -100) {
        onRemove(id);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className={`todo ${completed ? "todo-completed" : ""}`}>
      <h2 className="todo-text">{text}</h2>
    </div>
  );
}
