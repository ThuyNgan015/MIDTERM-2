import React, { useState } from "react";

function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [onA, setInputA] = useState("");
  const [onB, setInputB] = useState("");
  const [result, setResult] = useState("");

  const isNumber = (value) => !isNaN(parseFloat(value));

  /* You will need some function to handle the key pressed and button events */
  const handleInputA = (event) => {
    setInputA(event.target.value);
  };

  const handleInputB = (event) => {
    setInputB(event.target.value);
  };

  const handleCompute = () => {
    if (isNumber(onA) && isNumber(onB)) {
      const sum = parseFloat(onA) + parseFloat(onB);
      setResult(sum.toString());
    } else {
      setResult("A and B shall be numbers !");
    }
  };

  const getResultColor = () => {
    return isNumber(onA) && isNumber(onB) ? "black" : "red";
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input value={onA} onChange={handleInputA} />

      <label>B =</label>
      <input value={onB} onChange={handleInputB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input value={result} disabled style={{ color: getResultColor() }} />
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;
