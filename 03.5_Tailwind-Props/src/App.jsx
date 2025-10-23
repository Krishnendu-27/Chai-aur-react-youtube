import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let objex = {
    name: "Krish",
    age: 19,
  };
  return (
    <>
      {/* this process inlcude for tailwind install in vite 
    
    how to know tailwind work or not just use className = ''
    in html which ever tag is not cloesd make them cloed mens each tag need to be closed 

    */}
      <h1 className="size-48 shadow-xl bg-green-500 rounded-2xl">hallo bro</h1>
      <Card />

      {/* by this we can make as many card we want but we want that each card have diffrent name or img for that we use loop and props*/}
      {/* what is props its a object and have prototype mens when we declare props whatever data we give its recive in the main props */}

      <Card name="MHA" btnText=" clcike me" />
      <Card name="Naruto" btnText="not click me " />
      <Card name="Naruto" />
    </>
  );
}

export default App;
