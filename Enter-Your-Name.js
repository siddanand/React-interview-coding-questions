import "./styles.css";
import { useState, useRef } from "react";
export default function App() {
  const [name, setName] = useState("");
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const saveName = () => {
    setName(`${inputRef1.current.value} ${inputRef2.current.value}`);
  };
  return (
    <div className="App">
      <input
        ref={inputRef1}
        onChange={(e) => (inputRef1.current.value = e.target.value)}
        type="text"
        placeholder="firstname"
      />
      <input
        ref={inputRef2}
        onChange={(e) => (inputRef2.current.value = e.target.value)}
        type="text"
        placeholder="lastname"
      />
      <button onClick={saveName}>Save</button>
      <br />
      Hi My name is : {name}
    </div>
  );
}
