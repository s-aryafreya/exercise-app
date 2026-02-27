import { useState, useEffect } from "react";

export default function DurationExercise({ name }) {
  let [time, setTime] = useState(0);
  let [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Update every 10ms
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  // Format time to 00:00:00 (Mins:Secs:Millis)
  const formatTime = (ms) => {
    let mins = Math.floor((ms / 60000) % 60).toString().padStart(2, "0");
    let secs = Math.floor((ms / 1000) % 60).toString().padStart(2, "0");
    let mills = Math.floor((ms / 10) % 100).toString().padStart(2, "0");
    return `${mins}:${secs}:${mills}`;
  };

  return (
    <div>
      <h2>{name}</h2>
      <p style={{ fontSize: "2em" }}>Time: {formatTime(time)}</p>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => { setRunning(false); setTime(0); }}>Reset</button>
    </div>
  );
}