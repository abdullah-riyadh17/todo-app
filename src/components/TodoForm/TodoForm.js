import React, { useEffect, useState } from "react";
import "./TodoForm.css";

const TodoForm = () => {
  const [todoItem, setTodoItem] = useState("");
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoItem) {
      setError(false);
      let uniqueId =
        new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
      let newTodoItem = {
        id: uniqueId,
        todo: todoItem,
        complete: false,
      };
      setTodos([newTodoItem, ...todos]);
      setTodoItem("");
    } else {
      setError(true);
      setTodoItem("");
    }
  };
  useEffect(() => {
    let addError = setTimeout(() => {
      setError(false);
    }, 3000);
    return () => {
      clearTimeout(addError);
    };
  }, [error]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="todo-form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoItem}
          className={error ? "error" : ""}
          onChange={(e) => setTodoItem(e.target.value)}
          placeholder="Add a Todo"
        />
        <button type="submit" className="btn">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
