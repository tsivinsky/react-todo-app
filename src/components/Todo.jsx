// Import dependencies
import React from "react";
import Emoji from "react-emoji-render";
import validator from "validator";
import { useSwipeable } from "react-swipeable";

// Import images
import Dots from "../images/dots.svg";
import Trash from "../images/trash.svg";

export default function Todo({ id, text, completed, onComplete, onRemove }) {
  const handlers = useSwipeable({
    // Event for deleting task
    onSwipedLeft: () => onComplete(id),
    onSwipedRight: () => onRemove(id),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  function Word({ text }) {
    if (validator.isURL(text)) {
      if (!text.startsWith("http")) {
        text = `https://${text}`;
      }

      return (
        <a href={text} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      );
    }

    if (text.startsWith(":")) return <Emoji text={text} />;

    return text;
  }

  return (
    <div className={`todo ${completed ? "todo-completed" : ""}`}>
      <img src={Dots} className="btn-todo-drag" alt="Dots button" />
      <div className="inner-block" {...handlers}>
        <h3 className="todo-text">
          {text.split(" ").map((word, i) => (
            <React.Fragment key={i}>
              <Word text={word} />{" "}
            </React.Fragment>
          ))}
        </h3>
      </div>
      <img
        src={Trash}
        className="trashbin"
        onClick={() => onRemove(id)}
        alt="Trashbin"
      />
    </div>
  );
}
