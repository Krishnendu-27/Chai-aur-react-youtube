# 🎨 React Props & Tailwind CSS Integration

---

## 🎯 What Are Props?

**Props** (short for "properties") are a mechanism to pass data from **parent** components to **child** components in React.

### 🔑 **Key Characteristics**

- 📦 Props are **objects** containing all passed data
- ⬇️ Props flow **downward** (parent → child, unidirectional)
- 🔒 Props are **read-only** (immutable in child)
- 🎁 Can pass: strings, numbers, booleans, objects, arrays, functions

---

## 🏗️ Project Structure

```
src/
├── App.jsx           # Parent component
├── components/
│   └── Card.jsx      # Child component (reusable)
├── assets/
│   └── react.svg
└── main.jsx
```

---

## 📝 Parent Component (App.jsx)

```jsx
import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let objex = {
    name: "Krish",
    age: 19,
  };

  return (
    <>
      {/* Testing Tailwind CSS */}
      <h1 className="size-48 shadow-xl bg-green-500 rounded-2xl">Hello bro</h1>
      {/* Rendering cards with different props */}
      <Card name="MHA" btnText="Click me" />
      <Card name="Naruto" btnText="Not click me" />
      <Card name="One Piece" /> {/* Uses default btnText */}
    </>
  );
}

export default App;
```

---

## 🎴 Child Component (Card.jsx)

```jsx
import React from "react";

function Card(props) {
  console.log(props); // Check what props are received

  return (
    <>
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://i.pinimg.com/736x/2c/6b/bb/2c6bbb7696f09017d7dd9117e0f3258a.jpg"
          alt="Anime character"
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">
              {props.name}
            </h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio tempora ipsum soluta amet corporis accusantium aliquid
              consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            {props.btnText || "Default Button Text"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
```

---

## 🎨 Setting Up Tailwind CSS in Vite

### 📦 **Installation Steps**

```bash
# 1. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# 2. Initialize Tailwind config
npx tailwindcss init -p

# 3. Install Vite Tailwind plugin (optional but recommended)
npm install -D @tailwindcss/vite
```

### ⚙️ **Configure Vite (vite.config.js)**

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### 📝 **Update tailwind.config.js**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### 🎨 **Add Tailwind Directives (index.css)**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### ✅ **Test Tailwind**

```jsx
<h1 className="text-3xl bg-blue-500 text-white p-4 rounded-lg">
  Tailwind is working! 🎉
</h1>
```

---

## 🔄 How Props Work

### 📊 **Data Flow Visualization**

```
App Component (Parent)
    ↓ passes props
    ↓ name="MHA"
    ↓ btnText="Click me"
Card Component (Child)
    ↓ receives
props = { name: "MHA", btnText: "Click me" }
```

---

## 🎯 Passing Props: Different Methods

### 1️⃣ **String Props**

```jsx
<Card name="Naruto" />
```

### 2️⃣ **Number Props**

```jsx
<Card age={19} />
```

### 3️⃣ **Boolean Props**

```jsx
<Card isActive={true} />;
{
  /* Shorthand for true */
}
<Card isActive />;
```

### 4️⃣ **Object Props**

```jsx
const user = { name: "Krish", age: 19 };
<Card userData={user} />;
```

### 5️⃣ **Array Props**

```jsx
const tags = ["anime", "action", "adventure"];
<Card tags={tags} />;
```

### 6️⃣ **Function Props**

```jsx
const handleClick = () => alert("Clicked!");
<Card onClick={handleClick} />;
```

---

## 🛠️ Accessing Props in Child

### 📝 **Method 1: Using `props` Object**

```jsx
function Card(props) {
  return <h1>{props.name}</h1>;
}
```

### 📝 **Method 2: Destructuring (Recommended)**

```jsx
function Card({ name, btnText = "Default Text" }) {
  return (
    <>
      <h1>{name}</h1>
      <button>{btnText}</button>
    </>
  );
}
```

### 📝 **Method 3: With Rest Operator**

```jsx
function Card({ name, ...otherProps }) {
  console.log(otherProps); // All other props
  return <h1>{name}</h1>;
}
```

---

## 🎨 Default Props

### ✅ **Method 1: Default Parameter**

```jsx
function Card({ name = "Unknown", btnText = "Click me" }) {
  return <button>{btnText}</button>;
}
```

### ✅ **Method 2: Logical OR Operator**

```jsx
function Card(props) {
  return <button>{props.btnText || "Default Text"}</button>;
}
```

### ✅ **Method 3: Default Props (Class Components)**

```jsx
Card.defaultProps = {
  name: "Unknown",
  btnText: "Click me",
};
```

---

## 🚫 Common Mistakes & Fixes

### ❌ **Mistake 1: Passing Objects Directly**

```jsx
// ❌ Wrong - Can't render objects directly
<h1>{props.user}</h1>

// ✅ Correct - Access object properties
<h1>{props.user.name}</h1>
```

### ❌ **Mistake 2: Forgetting Curly Braces**

```jsx
// ❌ Wrong - Treated as string "count"
<Card value="count" />

// ✅ Correct - Passes variable value
<Card value={count} />
```

### ❌ **Mistake 3: Trying to Modify Props**

```jsx
function Card(props) {
  props.name = "New Name"; // ❌ Error: Props are read-only
}
```

---

## 🎯 Complete Example: Dynamic Card List

```jsx
function App() {
  const animeList = [
    { id: 1, name: "MHA", btnText: "Watch Now" },
    { id: 2, name: "Naruto", btnText: "Start Series" },
    { id: 3, name: "One Piece", btnText: "Explore" },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {animeList.map((anime) => (
        <Card key={anime.id} name={anime.name} btnText={anime.btnText} />
      ))}
    </div>
  );
}
```

---

## 📊 Props vs State

| Feature        | Props                          | State                     |
| -------------- | ------------------------------ | ------------------------- |
| **Mutability** | 🔒 Immutable (read-only)       | ✏️ Mutable (can change)   |
| **Ownership**  | Owned by parent                | Owned by component itself |
| **Passed**     | From parent to child           | Internal to component     |
| **Purpose**    | Configuration/data from parent | Internal component data   |

---

## 🎨 Tailwind Utility Classes Used

| Class           | Purpose                              |
| --------------- | ------------------------------------ |
| `max-w-xs`      | Maximum width (20rem)                |
| `rounded-md`    | Medium border radius                 |
| `shadow-md`     | Medium shadow                        |
| `bg-black`      | Black background                     |
| `text-gray-100` | Light gray text                      |
| `object-cover`  | Image cover (maintains aspect ratio) |
| `flex`          | Flexbox layout                       |
| `flex-col`      | Flex direction column                |
| `space-y-8`     | Vertical spacing (2rem)              |
| `tracking-wide` | Letter spacing                       |

---

## ✨ Key Takeaways

- **📦 Props**: Objects containing data passed from parent to child
- **⬇️ Unidirectional Flow**: Data flows downward (parent → child)
- **🔒 Immutable**: Cannot modify props in child component
- **🎁 Can Pass Anything**: Strings, numbers, objects, arrays, functions
- **🛠️ Destructuring**: Cleaner way to access props
- **🎨 Tailwind in Vite**: Use `@tailwindcss/vite` plugin for best performance
- **🔄 Reusability**: Props make components flexible and reusable
- **✅ Default Props**: Provide fallback values for optional props
- **🚫 No Objects in JSX**: Access object properties, don't render objects directly
- **🎯 Component Philosophy**: Write once, use many times with different props

---
