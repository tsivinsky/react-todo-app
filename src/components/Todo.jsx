// Import dependencies
import React from "react";
import { Twemoji } from "react-emoji-render";

// Import images
import Dots from "../images/dots.svg";
import Trash from "../images/trash.svg";

export default function Todo({ id, text, completed, onComplete, onRemove }) {
  return (
    <div className={`todo ${completed ? "todo-completed" : ""}`}>
      <img src={Dots} className="btn-todo-drag" alt="Dots button" />
      <h3 className="todo-text" onClick={() => onComplete(id)}>
        <Twemoji text={text} />
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
