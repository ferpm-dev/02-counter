import React, { useState } from "react";

function App({ value }) {
  const [counter, setCounter] = useState(value);

  const handlePlus = () => {
    setCounter(counter + 1);
  };
  const handleLess = () => {
    setCounter(counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleLess}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
