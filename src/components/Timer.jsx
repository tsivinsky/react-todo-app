// Import dependencies
import React from "react";
import useTimer from "../hooks/useTimer";

export default function Timer() {
  const [seconds, , isGoing, { startTimer, stopTimer }] = useTimer();

  function addZero(number) {
    if (new String(number).length === 1) {
      return `0${number}`;
    }

    return number;
  }

  return (
    <div className="timer-block">
      <div
        className="timer"
        onClick={isGoing ? stopTimer : startTimer}
        style={{
          animation: isGoing ? "timer-animation 5s ease-in infinite" : "",
        }}
      >
        <h1>
          {addZero(Math.floor(seconds / 60))}:
          {addZero(Math.floor(seconds % 60))}
        </h1>
      </div>
    </div>
  );
}
