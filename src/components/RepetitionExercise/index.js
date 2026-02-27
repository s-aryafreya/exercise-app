import { useState } from "react";

export default function RepetitionExercise({ name }) {
  let [count, setCount] = useState(0); // Start at 0

  return (
    <div>
      <h2>{name}</h2>
      <p style={{ fontSize: "2em" }}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}