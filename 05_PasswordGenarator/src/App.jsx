import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");
  // ref hook
  const refhook = useRef(null);
  /* 
  ✅ What is useCallback?

UseCallback is a React hook that lets you keep (“cache”) a function object between renderings of a component, as long as its dependencies don’t change. 
React

In other words:

You pass a function you want to use.

You also pass an array of “dependencies” (things that the function uses, like props or state).

If none of those dependencies change between renders, React gives you back the same function it gave before.

If a dependency did change, React will give you a new function. 
React

🧮 How do you use it (syntax)?
const memoizedFn = useCallback(fn, [dep1, dep2, …]);


fn = the function you want to keep. 
React

[dep1, dep2, …] = list of dependencies. If any of those change, the function is recreated. 
React

On first render, memoizedFn is fn itself. On later renders, if dependencies are same, memoizedFn stays the same. 
React
  */
  const passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);
  const copytoclipboard = useCallback(() => {
    refhook.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, charAllowed, passwordGenrator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-8 my-12 text-orange-300 bg-gray-600">
        <h1 className="text-4xl font-semibold text-center mb-6">
          P@ssW0rd_G3n@r8or!
        </h1>
        <div className="flex items-center bg-gray-700 rounded-3xl overflow-hidden mb-4">
          <input
            type="text"
            className="flex-1 outline-none bg-transparent text-lg py-2 px-4 text-white"
            value={password}
            readOnly
            ref={refhook}
          />
          <button
            // add your handler
            className="bg-amber-500 hover:bg-amber-600 transition-colors px-4 py-2 text-white text-lg font-medium"
            onClick={copytoclipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={5}
            max={101}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setlength(Number(e.target.value))}
          />
          <label>length: {length}</label>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onClick={() => {
              setnumberAllowed((pre) => {
                return !pre;
              });
            }}
          />
          <label>Number {numberAllowed}</label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setcharAllowed((prev) => {
                return !prev;
              });
            }}
          />
          <label>Chracter {charAllowed}</label>
        </div>
      </div>
    </>
  );
}

export default App;
