import "./styles.css";
import { useState, useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "add") {
    state = [...state, action.value];
    return state;
  }
  return state;
};
export default function App() {
  const [items, setItem] = useState();
  const [list, dispatch] = useReducer(reducer, []);
  return (
    <div className="App">
      <input
        onChange={(e) => setItem(e.target.value)}
        type="text"
        placeholder="Item"
      />
      <button onClick={() => dispatch({ type: "add", value: items })}>
        Add Item
      </button>
      {list.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
    </div>
  );
}
