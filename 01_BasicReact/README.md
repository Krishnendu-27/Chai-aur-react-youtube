## 🎯 What is React?

**React** is a JavaScript **library** (not a framework) with two main ecosystems:

| Ecosystem           | Purpose     | Platform     |
| ------------------- | ----------- | ------------ |
| **📱 React Native** | Mobile apps | iOS, Android |
| **🌐 React DOM**    | Web apps    | Browsers     |

> **Official Docs**: [https://react.dev/](https://react.dev/)

---

## 🛠️ Creating a React Project

### 🔧 Method 1: Create React App (CRA)

**Command**:

```bash
npx create-react-app my-app
```

> **Note**: `npx` = **Node Package Executor** — runs packages without global installation

**Characteristics**:

- ✅ Comes with everything pre-configured
- ✅ Good for beginners
- ❌ **Large bundle size**
- ❌ **Slower** development server
- ✅ Production-ready build setup

---

### ⚡ Method 2: Vite (Recommended)

**Command**:

```bash
npm create vite@latest my-app
cd my-app
npm install  # Installs dependencies (node_modules)
npm run dev  # Starts dev server
```

**Characteristics**:

- ✅ **Much faster** than CRA
- ✅ **Smaller bundle size**
- ✅ Modern build tool
- ✅ Only includes React and React-DOM by default
- ✅ Hot Module Replacement (HMR) for instant updates

---

## 📦 Understanding `package.json`

The **main entry point** of your project. Contains scripts and dependencies.

### 🔑 Key Scripts

| Script      | Command         | Purpose                         |
| ----------- | --------------- | ------------------------------- |
| **`start`** | `npm run start` | Runs development server (CRA)   |
| **`dev`**   | `npm run dev`   | Runs development server (Vite)  |
| **`build`** | `npm run build` | Creates production build        |
| **`test`**  | `npm run test`  | Runs test suite                 |
| **`eject`** | `npm run eject` | Exposes config files (CRA only) |

> **⚠️ Warning**: `eject` is a **one-way operation** — you can't undo it!

---

### 📋 Additional Configurations

**`eslintConfig`**:

- Provides **suggestions** for better code (not errors)
- Helps maintain code quality and consistency

**`browserslist`**:

- Specifies which **browsers** your app should support
- Helps build tools optimize for target browsers

---

## 🏗️ Project Structure

### 📁 **Create React App Structure**

```
my-app/
├── node_modules/     # Dependencies
├── public/           # Static files
├── src/              # ⭐ Your code lives here (98% of time)
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json      # Project metadata
└── README.md
```

### 📁 **Vite Structure**

```
my-app/
├── node_modules/     # Dependencies (after npm install)
├── public/           # Static assets
├── src/              # ⭐ Main development folder
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── package.json
├── vite.config.js    # Vite configuration
└── index.html        # Entry HTML (different from CRA)
```

---

## 🚀 Running Your Project

### Create React App

```bash
cd my-app
npm run start    # Opens http://localhost:3000
```

### Vite

```bash
cd my-app
npm install      # First time only
npm run dev      # Opens http://localhost:5173
```

---

## 📦 Production Build

### Build Command

```bash
npm run build
```

**What happens**:

- Creates a `build/` (CRA) or `dist/` (Vite) folder
- Optimized, minified JavaScript files
- Ready to deploy to production
- **This folder is what you serve** on your web server

---

## 🎨 CRA vs Vite Comparison

| Feature              | Create React App      | Vite               |
| -------------------- | --------------------- | ------------------ |
| **Speed**            | 🐢 Slower             | ⚡ Very Fast       |
| **Bundle Size**      | 📦 Larger             | 📦 Smaller         |
| **HMR (Hot Reload)** | 🔄 Good               | 🔄 Excellent       |
| **Initial Setup**    | ✅ Complete           | ✅ Minimal         |
| **Build Tool**       | Webpack               | Vite + Rollup      |
| **Dev Server Start** | ~5-10 seconds         | ~1-2 seconds       |
| **Best For**         | Beginners, Large apps | Modern apps, Speed |

---

## 📝 Important Notes

### 🎯 **Where You'll Work**

- **98% of your time** will be spent in the **`src/`** folder
- This is where all your React components and logic live

### 📛 **Naming Conventions**

- Component files: `PascalCase.jsx` (e.g., `MyComponent.jsx`)
- Regular files: `camelCase.js` (e.g., `utils.js`)
- **In frameworks, naming is very important** for consistency

### 📦 **Dependencies**

- `node_modules/` folder is **not pushed to Git** (use `.gitignore`)
- Run `npm install` to restore dependencies from `package.json`

---

## 🛠️ Essential Commands Cheat Sheet

```bash
# Create new project (CRA)
npx create-react-app my-app

# Create new project (Vite)
npm create vite@latest my-app

# Navigate to project
cd my-app

# Install dependencies (Vite - first time)
npm install

# Start development server
npm run start    # CRA
npm run dev      # Vite

# Create production build
npm run build

# Check if package.json exists (inside project folder)
ls
```

---

## ✨ Key Takeaways

- **⚛️ React**: Library with React DOM (web) and React Native (mobile)
- **🛠️ Setup**: Use CRA for beginners, Vite for speed
- **📦 package.json**: Main entry point with scripts and dependencies
- **🏗️ Build Folder**: Production-ready files created by `npm run build`
- **⚡ Vite**: Faster, lighter alternative to Create React App
- **📁 src/**: Where you spend 98% of development time
- **📛 Naming**: Important in React — follow conventions

---
