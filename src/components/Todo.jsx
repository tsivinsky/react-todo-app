// Import dependencies
import React from "react";
import { SortableHandle } from "react-sortable-hoc";

// Import images
import Dots from "../images/dots.svg";
import Trash from "../images/trash.svg";

export default function Todo({ id, text, completed, onComplete, onRemove }) {
  const DragHandler = SortableHandle(() => (
    <img src={Dots} className="btn-todo-drag" alt="Dots button" />
  ));

  return (
    <div className={`todo ${completed ? "todo-completed" : ""}`}>
      <DragHandler />
      <h3 className="todo-text" onClick={() => onComplete(id)}>
        {text}
      </h3>
      <img
        src={Trash}
        className="trashbin"
        onClick={() => onRemove(id)}
        alt="Trashbin"
      />
    </div>
  );
}
