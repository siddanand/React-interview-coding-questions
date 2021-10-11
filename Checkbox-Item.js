import "./styles.css";
import { useState, useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "add") {
    let obj = {};
    obj["isChecked"] = false;
    obj["value"] = action.value;
    state = [...state, obj];
    return state;
  } else if (action.type === "uncheckOne") {
    state[action.value].isChecked = false;
    state = [...state];
    return state;
  } else if (action.type === "checkOne") {
    state[action.value].isChecked = true;
    state = [...state];
    return state;
  } else if (action.type === "checkAll") {
    return state.map((item) => {
      item.isChecked = true;
      return item;
    });
  } else if (action.type === "delete") {
    return state.filter((item) => {
      if (item.isChecked === false) {
        return item;
      }
    });
  }
  return state;
};
export default function App() {
  const [item, setItem] = useState("");
  const [list, dispatch] = useReducer(reducer, []);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Item"
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "add", value: item })}>
        Add Item
      </button>
      <button onClick={() => dispatch({ type: "checkAll" })}>Check All</button>
      <button onClick={() => dispatch({ type: "delete" })}>
        Delete Checked
      </button>
      {list.map((items, index) => {
        return (
          <div key={`${index}-${items}`}>
            {items.isChecked === true ? (
              <input
                type="checkbox"
                checked
                onChange={() => dispatch({ type: "uncheckOne", value: index })}
              />
            ) : (
              <input
                type="checkbox"
                onChange={() => dispatch({ type: "checkOne", value: index })}
              />
            )}
            {items.value}
          </div>
        );
      })}
    </div>
  );
}
