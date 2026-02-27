import { useState } from "react";
import './App.css'; // This line links your CSS file to this component
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";

function App() {
  let [selectedExercise, setSelectedExercise] = useState(null);

  const exercises = [
    { name: "Push Ups", type: "repetition" },
    { name: "Running", type: "duration" },
    { name: "Plank", type: "duration" },
    { name: "Sit Ups", type: "repetition" }
  ];

  // 1. Menu Screen
  if (selectedExercise === null) {
    return (
      <div className="App">
        <h1>Go Exercise!</h1>
        <p>Select an exercise:</p>
        {/* We use a container div to help with the layout */}
        <div className="menu-container">
          {exercises.map((ex) => (
            <button key={ex.name} onClick={() => setSelectedExercise(ex)}>
              {ex.name}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 2. Exercise Screen
  return (
    <div className="App">
      {/* We add className="secondary" to make the back button red */}
      <button className="secondary" onClick={() => setSelectedExercise(null)}>
        Back to Menu
      </button>
      
      {selectedExercise.type === "repetition" ? (
        <RepetitionExercise name={selectedExercise.name} />
      ) : (
        <DurationExercise name={selectedExercise.name} />
      )}
    </div>
  );
}

export default App;