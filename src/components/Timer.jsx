// Import dependencies
import React, { useEffect, useState } from "react";
import useTimer from "../hooks/useTimer";

import MinutesPicker from "./MinutesPicker";

export default function Timer() {
  const [
    seconds,
    isBreak,
    isGoing,
    { startTimer, stopTimer, setBreak, changeMinutes },
  ] = useTimer(25);

  const [minutes, setMinutes] = useState(25);

  function addZero(number) {
    if (new String(number).length === 1) {
      return `0${number}`;
    }

    return number;
  }

  function sendNotification() {
    new Notification("Time is gone!", {
      vibrate: true,
      body: isBreak
        ? "Break time is gone. Go working"
        : "Working time is gone. Take a Break",
    });
  }

  useEffect(() => {
    if (seconds === 0) {
      stopTimer();

      sendNotification();

      if (isBreak) return;

      // Change timer's type to break
      setBreak();

      setTimeout(() => {
        changeMinutes(5);

        // Restart the timer
        startTimer();
      }, 2000);
    }
  }, [seconds]);

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
      <MinutesPicker
        minutes={minutes}
        onSave={(mins) => {
          changeMinutes(mins);
          setMinutes(mins);
        }}
        isGoing={isGoing}
      />
    </div>
  );
}
