import { useRef, useState } from "react";
import "./App.css";

function App() {
  const firstNumberRef = useRef(null);
  const secondNumberRef = useRef(null);
  const [result, setResult] = useState("");

  const calculate = (operation) => {
    const firstValue = firstNumberRef.current.value;
    const secondValue = secondNumberRef.current.value;

    if (firstValue.trim() === "" || secondValue.trim() === "") {
      setResult("Please enter both numbers.");
      return;
    }

    const num1 = Number(firstValue);
    const num2 = Number(secondValue);
    let answer;

    switch (operation) {
      case "addition":
        answer = num1 + num2;
        break;
      case "subtraction":
        answer = num1 - num2;
        break;
      case "multiplication":
        answer = num1 * num2;
        break;
      case "division":
        if (num2 === 0) {
          setResult("Cannot divide by zero!");
          return;
        }
        answer = num1 / num2;
        break;
      default:
        return;
    }

    if (!Number.isFinite(answer)) {
      setResult("Result is too large.");
      return;
    }

    setResult(String(Number(answer.toFixed(8))));
  };

  const resetInputs = () => {
    firstNumberRef.current.value = "";
    secondNumberRef.current.value = "";
    firstNumberRef.current.focus();
  };

  const resetResult = () => {
    setResult("");
  };

  return (
    <div className="App">
      <main className="calculator">
        <h1>React Calculator</h1>
        <p className="subtitle">Perform basic mathematical operations</p>

        <div className="input-group">
          <label htmlFor="first-number">First Number</label>
          <input
            id="first-number"
            type="number"
            step="any"
            placeholder="Enter first number"
            ref={firstNumberRef}
          />

          <label htmlFor="second-number">Second Number</label>
          <input
            id="second-number"
            type="number"
            step="any"
            placeholder="Enter second number"
            ref={secondNumberRef}
          />
        </div>

        <div className="operations">
          <button onClick={() => calculate("addition")}>Addition (+)</button>
          <button onClick={() => calculate("subtraction")}>Subtraction (-)</button>
          <button onClick={() => calculate("multiplication")}>Multiplication (×)</button>
          <button onClick={() => calculate("division")}>Division (÷)</button>
        </div>

        <div className="result-box" aria-live="polite">
          <span>Result</span>
          <strong>{result === "" ? "—" : result}</strong>
        </div>

        <div className="reset-buttons">
          <button className="reset-button" onClick={resetInputs}>Reset Inputs</button>
          <button className="reset-button" onClick={resetResult}>Reset Result</button>
        </div>
      </main>
    </div>
  );
}

export default App;