import "./styles.css";
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  if (action.type === "add") {
    state = [...state, action.value];
    return state;
  }
  return state;
};
export default function App() {
  const [list, dispatch] = useReducer(reducer, []);
  const abc = (e) => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      xyz(e.target.value);
    }, 2000);
  };
  const xyz = (item) => {
    if (this.timer && item !== "") {
      dispatch({ type: "add", value: item });
    }
  };
  return (
    <div className="App">
      <input type="text" placeholder="Item" onChange={(e) => abc(e)} />
      {list.map((items, index) => {
        return <div key={`${index}-${items}`}>{items}</div>;
      })}
    </div>
  );
}
