// Import dependencies
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import TodoSettings from "./TodoSettings";
import dotsImage from "../images/dots.svg";

const completedTodoStyle = {
  textDecoration: "line-through",
  opacity: "0.6",
};

const todoStyle = {
  textDecoration: "",
  opacity: "1",
};

export default function Todo({ id, text, completed, onComplete, onDelete }) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="todo">
      <h3
        style={completed ? completedTodoStyle : todoStyle}
        className="todo-text"
        onClick={() => onComplete(id)}
      >
        {text}
      </h3>
      <div
        className="settings"
        onClick={() => setShowSettings((prev) => !prev)}
      >
        <CSSTransition
          in={showSettings}
          timeout={300}
          classNames="todo-settings"
          unmountOnExit
        >
          <TodoSettings id={id} onComplete={onComplete} onDelete={onDelete} />
        </CSSTransition>

        <img src={dotsImage} alt="Dots" className="dots-button" />
      </div>
    </div>
  );
}
