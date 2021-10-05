import "./styles.css";
import { useState, useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "add") {
    let obj = {};
    obj["isEdit"] = false;
    obj["value"] = action.value;
    state = [...state, obj];
    return state;
  } else if (action.type === "makeEdit") {
    state[action.value].isEdit = true;
    state = [...state];
    return state;
  } else if (action.type === "edit") {
    state[action.value[1]].value = action.value[0];
    state[action.value[1]].isEdit = false;
    state = [...state];
    return state;
  } else if (action.type === "delete") {
    let check = state[action.value];
    return state.filter((item) => {
      if (item !== check) return item;
    });
  }
  return state;
};
export default function App() {
  const [item, setItem] = useState();
  const [edititem, setEdititem] = useState();
  const [list, dispatch] = useReducer(reducer, []);
  console.log(list);
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
      {list.map((item, index) => {
        return (
          <div key={`${index}-${item}`}>
            {item.isEdit === false ? (
              <span>
                {item.value}
                <button
                  onClick={() => dispatch({ type: "makeEdit", value: index })}
                >
                  Edit
                </button>
              </span>
            ) : (
              <span>
                <input
                  type="text"
                  defaultValue={item.value}
                  onChange={(e) => setEdititem(e.target.value)}
                />
                <button
                  onClick={() =>
                    dispatch({ type: "edit", value: { 0: edititem, 1: index } })
                  }
                >
                  Save
                </button>
              </span>
            )}

            <button onClick={() => dispatch({ type: "delete", value: index })}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
