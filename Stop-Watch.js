import "./styles.css";
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type === "add") {
    state = [...state, action.value];
    return state;
  } else if (action.type === "empty") {
    return [];
  }
  return state;
};
export default function App() {
  const [time, setTime] = useState(0);
  const [list, dispatch] = useReducer(reducer, []);
  const startTimer = () => {
    if (this.timer === undefined) {
      this.timer = setInterval(() => {
        setTime((time) => time + 1);
      }, 100);
    } else {
      clearInterval(this.timer);
      this.timer = undefined;
    }
  };
  const resetTimer = () => {
    clearInterval(this.timer);
    this.timer = undefined;
    setTime(0);
    dispatch({ type: "empty", value: "" });
  };
  return (
    <div className="App">
      {time % 10 === 0 ? <div>{time / 10}.0</div> : <div>{time / 10}</div>}
      <br />
      <button onClick={startTimer}>Start/Stop</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={() => dispatch({ type: "add", value: time })}>
        Record Time
      </button>
      <br />
      {list.map((item, index) => {
        return <div key={`${index}-${item}`}>{item / 10}</div>;
      })}
    </div>
  );
}
