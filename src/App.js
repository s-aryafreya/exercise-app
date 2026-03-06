import React, { useState } from 'react';
import './App.css';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';
import RunningExercise from './components/RunningExercise'; // Import new component

function App() {
  const [currentExercise, setCurrentExercise] = useState(null);

  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Plank", type: "duration" },
    { name: "Running", type: "running" }, // New type for RunningExercise
    { name: "Squats", type: "repetition" }
  ];

  let screenContent;

  if (currentExercise) {
    // Switch based on the type defined in our array
    switch(currentExercise.type) {
      case "repetition":
        screenContent = <RepetitionExercise name={currentExercise.name} />;
        break;
      case "duration":
        screenContent = <DurationExercise name={currentExercise.name} />;
        break;
      case "running":
        screenContent = <RunningExercise name={currentExercise.name} />;
        break;
      default:
        screenContent = null;
    }
  } else {
    // Menu View
    screenContent = (
      <div className="menu">
        <h1>Select Exercise</h1>
        {exercises.map((ex) => (
          <button 
            key={ex.name} 
            className="menu-button" 
            onClick={() => setCurrentExercise(ex)}
          >
            {ex.name}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      {screenContent}
      {currentExercise && (
        <button className="back-button" onClick={() => setCurrentExercise(null)}>
          Back to Menu
        </button>
      )}
    </div>
  );
}

export default App;