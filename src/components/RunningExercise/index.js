import React, { useState, useEffect } from 'react';

function RunningExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]); // State to store lap times

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  // Utility to format time into MM:SS
  const formatTime = (time) => {
    let mins = Math.floor(time / 60).toString().padStart(2, '0');
    let secs = (time % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  // Logic to save the current time to the lap list
  const recordLap = () => {
    if (running) {
      setLaps([...laps, formatTime(seconds)]);
    }
  };

  return (
    <div className="exercise-container">
      <h2>{name}</h2>
      <p style={{ fontSize: '3em', margin: '10px' }}>{formatTime(seconds)}</p>
      
      <div className="controls">
        <button className="control-button" onClick={() => setRunning(!running)}>
          {running ? "Pause" : "Start"}
        </button>
        <button className="control-button" onClick={recordLap} disabled={!running}>
          Record Lap
        </button>
        <button className="control-button reset-button" onClick={() => {
          setSeconds(0);
          setRunning(false);
          setLaps([]);
        }}>
          Reset
        </button>
      </div>

      <div className="laps-container" style={{ marginTop: '20px' }}>
        <h3>Laps</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {laps.map((lapTime, index) => (
            <li key={index} style={{ borderBottom: '1px solid #333', padding: '5px' }}>
              Lap {index + 1}: {lapTime}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RunningExercise;