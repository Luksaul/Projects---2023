import "./TodoList.css";
import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState(false);

  const saveTodoHandler = (todo) => {
    setTodos((arr) => [...arr, todo]);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    var todo = { text: event.target.elements[0].value };

    if (todo.text !== "") saveTodoHandler(todo);
    console.log(todos);
    document.getElementById("todoInput").reset();
  };

  const checkedHandler = () => {
    setChecked(checked === true ? false : true);
  };

  const clearListHandler = () => {
    setTodos([]);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={addTodoHandler} id="todoInput">
          <input type="text" />
          <button type="submit">+</button>
        </form>
        {todos.map((todo) => (
          <p onClick={checkedHandler} className={checked ? "checked" : ""}>
            {todo.text}
          </p>
        ))}
        <button onClick={clearListHandler}>clear</button>
      </div>
    </>
  );
};

export default TodoList;
