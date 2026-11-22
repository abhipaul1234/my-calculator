import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus() {
    const inputVal = inputRef.current.value;
    setResult(result + Number(inputVal));
  }

  function minus() {
    const inputVal = inputRef.current.value;
    setResult(result - Number(inputVal));
  }

  function times() {
    const inputVal = inputRef.current.value;
    setResult(result * Number(inputVal));
  }

  function divide() {
    const inputVal = Number(inputRef.current.value);

    if (inputVal === 0) {
      window.alert("Cannot divide by zero.");
      return;
    }

    setResult(result / inputVal);
  }

  function resetInput() {
    inputRef.current.value = "";
  }

  function resetResult() {
    setResult(0);
  }

  return (
    <div className="App">
      <main className="calculator">
        <h1>React Calculator</h1>
        <p className="subtitle">Enter a number and choose an operation.</p>

        <div className="input-group">
          <label htmlFor="calculator-input">Number</label>
          <input
            id="calculator-input"
            type="number"
            step="any"
            placeholder="Enter a number"
            ref={inputRef}
          />
        </div>

        <div className="operations">
          <button onClick={plus}>Add</button>
          <button onClick={minus}>Subtract</button>
          <button onClick={times}>Multiply</button>
          <button onClick={divide}>Divide</button>
        </div>

        <div className="result-box" aria-live="polite">
          <span>Result</span>
          <strong>{result}</strong>
        </div>

        <div className="reset-buttons">
          <button className="reset-button" onClick={resetInput}>Reset Input</button>
          <button className="reset-button" onClick={resetResult}>Reset Result</button>
        </div>
      </main>
    </div>
  );
}

export default App;
