// Import dependencies
import { useState } from "react";

export default function useTimer() {
  const [isBreak, setIsBreak] = useState(false);
  const [isGoing, setIsGoing] = useState(false);
  const [timer, setTimer] = useState(0);
  const [seconds, setSeconds] = useState(() => {
    if (isBreak) return 5 * 60;

    return 25 * 60;
  });

  function sendNotification() {
    const body = isBreak
      ? "Working time is gone. Take a Break"
      : "Break time is gone. Go working";

    const notification = new Notification("Time is gone!", {
      vibrate: true,
      body,
    });
  }

  return [
    seconds,
    isBreak,
    isGoing,
    {
      startTimer: function () {
        setIsGoing(true);

        setSeconds((prev) => prev - 1);

        setTimer(
          setInterval(() => {
            setSeconds((prev) => prev - 1);

            if (!seconds) {
              clearInterval(timer);

              sendNotification();

              setIsBreak((prev) => !prev);
            }
          }, 1000)
        );
      },
      stopTimer: function () {
        clearInterval(timer);

        setIsGoing(false);
      },
    },
  ];
}
