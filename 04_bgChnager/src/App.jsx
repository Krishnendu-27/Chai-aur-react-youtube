import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("white");
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <>
      <div className="main">
        <button
          onClick={() => setColor("red")}
          style={{ backgroundColor: "red", color: "white" }}
        >
          red
        </button>
        <button
          onClick={() => setColor("orange")}
          style={{ backgroundColor: "orange", color: "white" }}
        >
          orange
        </button>
        <button
          onClick={() => setColor("yellow")}
          style={{ backgroundColor: "yellow", color: "white" }}
        >
          yellow
        </button>
        <button
          onClick={() => setColor("green")}
          style={{ backgroundColor: "green", color: "white" }}
        >
          green
        </button>
        <button
          onClick={() => setColor("blue")}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          blue
        </button>
        <button
          onClick={() => setColor("indigo")}
          style={{ backgroundColor: "indigo", color: "white" }}
        >
          indigo
        </button>
        <button
          onClick={() => setColor("violet")}
          style={{ backgroundColor: "violet", color: "white" }}
        >
          violet
        </button>
        <button
          onClick={() => setColor("pink")}
          style={{ backgroundColor: "pink", color: "white" }}
        >
          pink
        </button>
        <button
          onClick={() => setColor("black")}
          style={{ backgroundColor: "black", color: "white" }}
        >
          black
        </button>
      </div>
    </>
  );
}

export default App;
