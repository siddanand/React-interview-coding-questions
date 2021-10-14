import "./styles.css";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("Sidd");
  return (
    <div className="App">
      Hi my name is: <span onClick={() => setName("John")}>{name}</span>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
