// Import dependencies
import { useState } from "react";

export default function useTimer(mins = 25) {
  const [isBreak, setIsBreak] = useState(false);
  const [isGoing, setIsGoing] = useState(false);
  const [timer, setTimer] = useState(0);
  const [seconds, setSeconds] = useState(() => {
    if (isBreak) return 5 * 60;

    return mins * 60;
  });

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
          }, 1000)
        );
      },
      stopTimer: function () {
        clearInterval(timer);

        setIsGoing(false);
      },
      setBreak: function () {
        setIsBreak(true);
      },
      changeMinutes: function (mins = 5) {
        setSeconds(mins * 60);
      },
    },
  ];
}
