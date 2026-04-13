# 🎓 Favourite Student List App

A simple React application built using Vite that allows users to manage a list of favourite students. This project demonstrates the use of React Router for navigation and Context API for global state management.

---

## 🚀 Features

* 📄 View list of students
* ⭐ Add students to favourites
* ❌ Remove students from favourites
* 🔐 Simple Login & Signup pages
* 🔁 Navigation between pages without reload (React Router)
* 🌐 Global state management using Context API
* 🚫 Prevent duplicate favourites
* 📭 Displays message when no favourites are added

---

## 🛠️ Tech Stack

* React JS (Vite)
* React Router DOM
* Context API
* CSS (Basic Styling)

---

## 📂 Project Structure

src/
├── components/
│   └── Navbar.jsx
├── context/
│   ├── StudentContext.jsx
│   └── AuthContext.jsx
├── pages/
│   ├── StudentList.jsx
│   ├── FavouriteStudents.jsx
│   ├── Login.jsx
│   └── Signup.jsx
├── App.jsx
├── main.jsx

---

## ▶️ How to Run

```bash
npm install
npm run dev
```

---

## 💡 Learning Outcomes

* Understanding React functional components
* Using React Router for multi-page navigation
* Managing global state with useContext
* Handling dynamic rendering with map()
* Implementing basic authentication UI

---

## 📌 Note

This project uses a simple frontend-only authentication (no backend). It is designed for learning purposes.

---



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
