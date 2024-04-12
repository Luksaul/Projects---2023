import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ShoppingListHome from "./components/ShoppingList/ShoppingListHome.jsx";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimerHome.jsx";
import TodoList from "./components/TodoList/TodoListHome.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/shopping-list", element: <ShoppingListHome /> },
  { path: "/pomodoro-timer", element: <PomodoroTimer /> },
  { path: "/todo-list", element: <TodoList /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
