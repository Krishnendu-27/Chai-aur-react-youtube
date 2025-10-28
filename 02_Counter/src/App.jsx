import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function addval() {
    if (count >= 20) {
      return;
    } else {
      // setCount(count + 1);
      setCount((count1) => count1 + 1);
      setCount((count1) => count1 + 1);
    }
  }
  function delteval() {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  }
  return (
    <>
      <h1>COUNTER PROJECT</h1>
      <h2>Courrent count: {count}</h2>
      <button onClick={addval}>ADD</button>
      <br />
      <p style={{ paddingBottom: "px" }}></p>
      <button onClick={delteval}>DELETE</button>
    </>
  );
}

export default App;
