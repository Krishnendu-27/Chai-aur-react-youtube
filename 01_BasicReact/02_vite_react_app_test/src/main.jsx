import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
let name = "krish";
const createl = React.createElement(
  "a",
  { href: "https://youtube.com", target: "_blank" },
  "clcik me "
);

createRoot(document.getElementById("root")).render(
  <>
    createl
    <h1>halo my bro name is {name}</h1>
    {/* here name is evaluate expretion its store the final outcome we can not do js code like if else but we can store the result from get  */}
  </>
);
