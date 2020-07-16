// Import dependencies
import React from "react";

// Import images
import ArrowUp from "../images/arrow-up.svg";
import ArrowDown from "../images/arrow-down.svg";

export default function MinutesPicker({ minutes, onSave, isGoing }) {
  return (
    <div className="minutes-picker">
      <div className="inner-block">
        <img
          src={ArrowUp}
          alt="Arrow up"
          onClick={() => {
            if (isGoing) return;

            onSave(minutes + 1);
          }}
        />
        <h2>{minutes}</h2>
        <img
          src={ArrowDown}
          alt="Arrow up"
          onClick={() => {
            if (isGoing) return;

            if (minutes <= 1) return;

            onSave(minutes - 1);
          }}
        />
      </div>
    </div>
  );
}
