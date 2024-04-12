import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="linkList">
        <Link to="/shopping-list">Shopping List</Link>
        <Link to="/pomodoro-timer">Pomodoro Timer</Link>
        <Link to="/todo-list">Todo List</Link>
      </div>
    </>
  );
}

export default App;
