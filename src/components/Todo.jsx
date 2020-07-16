// Import dependencies
import React from "react";
import { Twemoji } from "react-emoji-render";
import validator from "validator";

// Import images
import Dots from "../images/dots.svg";
import Checkbox from "../images/checkbox.svg";
import Trash from "../images/trash.svg";

export default function Todo({ id, text, completed, onComplete, onRemove }) {
  function Word({ text }) {
    if (validator.isURL(text)) {
      if (!text.startsWith("http")) {
        text = `https://${text}`;
      }

      return (
        <a href={text} target="_blank">
          {text}
        </a>
      );
    }

    if (text.startsWith(":")) return <Twemoji text={text} />;

    return text;
  }

  return (
    <div className={`todo ${completed ? "todo-completed" : ""}`}>
      <img src={Dots} className="btn-todo-drag" alt="Dots button" />
      <h3 className="todo-text">
        {text.split(" ").map((word, i) => (
          <React.Fragment key={i}>
            <Word text={word} />{" "}
          </React.Fragment>
        ))}
      </h3>
      <div className="buttons">
        <img
          src={Checkbox}
          className="checkbox"
          onClick={() => onComplete(id)}
          alt="Checkbox button"
        />
        <img
          src={Trash}
          className="trashbin"
          onClick={() => onRemove(id)}
          alt="Trashbin"
        />
      </div>
    </div>
  );
}
