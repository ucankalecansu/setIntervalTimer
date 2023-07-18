import React, { useState } from "react";

// Add default value
function Timer({ startCount }) {
  // Counter should be started with default value (only positive integers)
  const [count, setCount] = useState(startCount);
  var timerInterval;
  const [timerOn, setTimerOn] = useState(false);

  const handleStart = () => {
    if (timerOn) {
      /* This statement can not update the time value
      within the Interval function. */
      startCount = 10;
      return;
    }
    setTimerOn(true);
    timerInterval = setInterval(() => {
      setCount(startCount);
      startCount--;
      if (startCount < 0) {
        clearInterval(timerInterval);
        setTimerOn(false);
      }
    }, 1000);
  };

  const handlePause = () => {
    // Only stop timer, value should be whatever it is
  };

  const handleReset = () => {
    // Stop timer and back to initial count
  };

  return (
    <div style={{ border: "dashed 1px black", padding: 5 }}>
      <p>Value: {count}</p>
      {count === 0 ? <p>Countdown complete!</p> : <p>Counting down to: 0</p>}
      <button onClick={handleStart}>Start</button>
      <button>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Timer;
