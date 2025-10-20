# 🧬 Understanding React: Custom React Implementation & JSX Internals

---

## 🎯 Building a Custom React Library

This tutorial demonstrates how React works internally by building a simplified version from scratch.

---

## 📝 Custom React Implementation

### 🌐 **HTML Structure**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Custom React App</title>
  </head>
  <body>
    <div class="root"></div>
    <script src="./script.js"></script>
  </body>
</html>
```

### 🔧 **JavaScript Implementation**

```javascript
// Custom React function to create DOM elements
function CreateReact(reactElement, container) {
  // Create DOM element based on type
  let el = document.createElement(reactElement.type);

  // Set all attributes from props
  for (let key in reactElement.props) {
    el.setAttribute(key, reactElement.props[key]);
  }

  // Set text content
  el.innerHTML = reactElement.children;

  // Append to container
  container.appendChild(el);
}

// React element structure (how React sees JSX internally)
let reactElement = {
  type: "a", // HTML tag type
  props: {
    // Element attributes
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me", // Text content
};

// Get root container and render
let root = document.querySelector(".root");
CreateReact(reactElement, root);
```

---

## 🌳 React Element Structure

React converts all JSX into **objects** that represent a **virtual tree structure**.

### 📊 **React Element Anatomy**

```javascript
let reactElement = {
  type: "tagName", // 1. Element type (a, div, h1, etc.)
  props: {
    // 2. Properties/attributes object
    attribute1: "value1",
    attribute2: "value2",
  },
  children: "content", // 3. Text content or child elements
};
```

### 🔄 **JSX to Object Conversion**

**JSX Code:**

```jsx
<a href="https://google.com" target="_blank">
  Click me
</a>
```

**React sees it as:**

```javascript
{
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank"
  },
  children: "Click me"
}
```

---

## ⚡ Why Bundlers Are Essential

### 🔄 **The Translation Process**

1. **You write**: JSX (HTML-like syntax)
2. **Bundler converts**: JSX → JavaScript objects
3. **React processes**: Objects → Virtual DOM
4. **Browser renders**: Virtual DOM → Real DOM

### 🛠️ **Bundler's Job**

- **Syntax Correction**: Converts JSX to valid JavaScript
- **Import Resolution**: Handles module imports
- **Optimization**: Minifies and optimizes code
- **Compatibility**: Ensures browser compatibility

> **Important**: React doesn't understand HTML directly — that's why it's called **JSX** (JavaScript XML)

---

## 🏗️ Real React Implementation

### 📝 **Using React.createElement()**

```javascript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";

let name = "krish";

// Creating element using React.createElement
const createEl = React.createElement(
  "a", // 1. Tag name
  { href: "https://youtube.com", target: "_blank" }, // 2. Props object
  "Click me" // 3. Text content
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {createEl}
    <h1>Hello, my brother's name is {name}</h1>
  </StrictMode>
);
```

---

## 🧮 JavaScript Expressions in JSX

### ✅ **What Works in `{}`**

```jsx
const App = () => {
  const name = "Krish";
  const age = 25;
  const isLoggedIn = true;

  return (
    <>
      <h1>Name: {name}</h1> {/* ✅ Variables */}
      <p>Age: {age + 5}</p> {/* ✅ Expressions */}
      <p>Status: {isLoggedIn ? "Online" : "Offline"}</p> {/* ✅ Ternary */}
      <p>Time: {new Date().toLocaleTimeString()}</p> {/* ✅ Function calls */}
      <p>Random: {Math.random()}</p> {/* ✅ Math operations */}
    </>
  );
};
```

### ❌ **What Doesn't Work in `{}`**

```jsx
const App = () => {
  return (
    <>
      {/* ❌ Control structures don't work directly */}
      {/* {if (true) { return "Hello" }} */}
      {/* {for (let i = 0; i < 5; i++) { console.log(i) }} */}

      {/* ✅ Use these alternatives instead */}
      {true && <p>Conditional rendering</p>}
      {[1, 2, 3].map((num) => (
        <span key={num}>{num}</span>
      ))}
    </>
  );
};
```

---

## 🔍 JSX Rules & Expressions

### 📏 **JSX Expression Rules**

| Feature                   | Description                           | Example                       |
| ------------------------- | ------------------------------------- | ----------------------------- |
| **Evaluated Expressions** | Stores final outcome only             | `{name}`, `{2 + 3}`           |
| **No Statements**         | Can't use if/else, loops directly     | Use ternary, `&&`, `.map()`   |
| **Function Calls**        | Can call functions that return values | `{getName()}`                 |
| **Objects**               | Must be serializable                  | `{user.name}` ✅, `{user}` ❌ |

### 💡 **Working with Complex Logic**

**❌ Won't work:**

```jsx
<div>
  {
    if (user.isLoggedIn) {
      return <p>Welcome!</p>
    }
  }
</div>
```

**✅ Use instead:**

```jsx
<div>{user.isLoggedIn ? <p>Welcome!</p> : <p>Please login</p>}</div>;

{
  /* Or for more complex logic */
}
<div>{user.isLoggedIn && <p>Welcome!</p>}</div>;
```

---

## 🔧 Optimized Custom React Function

### 📝 **Improved Version**

```javascript
function CreateReact(reactElement, container) {
  // Create element
  let el = document.createElement(reactElement.type);

  // Set attributes dynamically (no repetition)
  for (let key in reactElement.props) {
    if (key === "className") {
      el.setAttribute("class", reactElement.props[key]);
    } else if (key.startsWith("on")) {
      // Handle events
      el.addEventListener(key.slice(2).toLowerCase(), reactElement.props[key]);
    } else {
      el.setAttribute(key, reactElement.props[key]);
    }
  }

  // Handle children (can be string or array)
  if (typeof reactElement.children === "string") {
    el.innerHTML = reactElement.children;
  } else if (Array.isArray(reactElement.children)) {
    reactElement.children.forEach((child) => {
      if (typeof child === "string") {
        el.appendChild(document.createTextNode(child));
      } else {
        CreateReact(child, el); // Recursive for nested elements
      }
    });
  }

  container.appendChild(el);
}
```

---

## 🎯 Key Differences: Custom vs Real React

| Aspect                  | Custom React               | Real React                |
| ----------------------- | -------------------------- | ------------------------- |
| **Virtual DOM**         | ❌ Direct DOM manipulation | ✅ Virtual DOM diffing    |
| **Re-rendering**        | ❌ Manual updates          | ✅ Automatic optimization |
| **Event Handling**      | ❌ Basic addEventListener  | ✅ SyntheticEvents        |
| **State Management**    | ❌ None                    | ✅ useState, useEffect    |
| **Component Lifecycle** | ❌ None                    | ✅ Full lifecycle methods |
| **Performance**         | 🐌 Slower for complex apps | ⚡ Optimized algorithms   |

---

## 🏗️ React App Architecture

### 📊 **How React Apps Work**

```
1. JSX Code (Developer writes)
        ↓
2. Bundler (Babel/TypeScript transforms)
        ↓
3. React.createElement() calls
        ↓
4. Virtual DOM objects
        ↓
5. React reconciliation
        ↓
6. Real DOM updates
```

### 🎛️ **App Function in main.jsx**

```jsx
// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom App Component</h1>
      <App />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);
```

---

## ✨ Key Takeaways

- **🧬 React Elements**: JSX gets converted to JavaScript objects with `type`, `props`, and `children`
- **🛠️ Bundlers**: Essential for converting JSX to browser-compatible JavaScript
- **🌳 Virtual DOM**: React uses object representation before touching real DOM
- **🧮 Expressions Only**: JSX `{}` accepts expressions, not statements
- **⚡ React.createElement()**: The actual function behind JSX syntax
- **🔄 No Direct HTML**: React doesn't understand HTML — only JSX/JavaScript objects
- **📊 Performance**: Real React optimizes with Virtual DOM diffing algorithms
- **🎯 Final Outcome**: JSX expressions store evaluated results, not code

---
