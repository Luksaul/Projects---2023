import "./TodoList.css";
import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const saveTodoHandler = (todo) => {
    setTodos((arr) => [...arr, todo]);
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    var todo = { key: crypto.randomUUID(), text: event.target.elements[0].value};

    if (todo.text !== "") saveTodoHandler(todo);
    document.getElementById("todoInput").reset();
  };

  const checkedHandler = (key) => {
    const clickedItem = todos.filter((clickedTodo) => clickedTodo.key === key)
    clickedItem.checked = (clickedItem.checked === false) ? true : false;
  };

  const clearListHandler = () => {
    setTodos([]);
  };

  return (
    <>
      <div className="todo-list">
        <form onSubmit={addTodoHandler} id="todoInput">
          <input type="text" />
        </form>
        {todos.map((todo) => (
          <Todo todoObj={todo}/>
        ))}
        <button onClick={clearListHandler}>clear</button>
      </div>
    </>
  );
};

export default TodoList;
