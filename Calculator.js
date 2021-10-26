import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  // const [number, setNumber] = useState([]);
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [operator, setOperator] = useState("");
  const [output, setOutput] = useState("");
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const operators = ["+", "-", "*", "/"];
  const makeNumber = (item) => {
    if (operator === "") {
      setNumber1(`${number1}` + `${item}`);
      setOutput(`${number1}` + `${item}`);
    } else {
      setNumber2(`${number2}` + `${item}`);
      setOutput(`${number2}` + `${item}`);
    }
  };
  const calculate = () => {
    let a = `${Number(number1)} ${operator} ${Number(number2)}`;
    setOutput(eval(a));
    setNumber1("");
    setNumber2("");
    setOperator("");
  };
  return (
    <div className="App">
      <h1>Calculator</h1>
      <input type="text" defaultValue={output} readOnly />
      <br />
      {arr.map((item, index) => {
        return (
          <span key={index}>
            <button onClick={() => makeNumber(item)}>{item}</button>
            {(index + 1) % 3 === 0 ? <br /> : null}
          </span>
        );
      })}
      {operators.map((item, index) => {
        return (
          <span key={index}>
            <button onClick={() => setOperator(item)}>{item}</button>
            {(index + 2) % 3 === 0 ? <br /> : null}
          </span>
        );
      })}
      <button onClick={calculate}>=</button>
    </div>
  );
}
