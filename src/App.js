import { useRef, useState } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");

  function plus() {
    const inputVal = inputRef.current.value;

    if (inputVal.trim() === "") {
      setError("Please enter a number.");
      return;
    }

    setError("");
    setResult(result + Number(inputVal));
  }

  function minus() {
    const inputVal = inputRef.current.value;

    if (inputVal.trim() === "") {
      setError("Please enter a number.");
      return;
    }

    setError("");
    setResult(result - inputVal);
  }

  function times() {
    const inputVal = inputRef.current.value;

    if (inputVal.trim() === "") {
      setError("Please enter a number.");
      return;
    }

    setError("");
    setResult(result * inputVal);
  }

  function divide() {
    const inputVal = Number(inputRef.current.value);

    if (inputRef.current.value.trim() === "") {
      setError("Please enter a number.");
      return;
    }

    if (inputVal === 0) {
      setError("Cannot divide by zero.");
      return;
    }

    setError("");
    setResult(result / inputVal);
  }

  function resetInput() {
    inputRef.current.value = "";
    setError("");
  }

  function resetResult() {
    setResult(0);
    setError("");
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
          <button type="button" onClick={plus}>Add</button>
          <button type="button" onClick={minus}>Subtract</button>
          <button type="button" onClick={times}>Multiply</button>
          <button type="button" onClick={divide}>Divide</button>
        </div>

        <div className="result-box" aria-live="polite">
          <span>Result</span>
          <strong>{result}</strong>
        </div>

        {error && <p className="error-message" role="alert">{error}</p>}

        <div className="reset-buttons">
          <button type="button" className="reset-button" onClick={resetInput}>
            Reset Input
          </button>
          <button type="button" className="reset-button" onClick={resetResult}>
            Reset Result
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
