import React, { useEffect, useState } from "react";
import "./TodoTable.css";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import { FiCircle } from "react-icons/fi";

const TodoTable = () => {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));
  const [completedTasks, setCompletedTasks] = useState("");

  const toggleComplete = (id) => {
    todos.find((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return setTodos([...todos]);
    });
  };
  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...newTodos]);
  };

  useEffect(() => {
    let completeArray = [];
    todos.filter((todo) => todo.complete === true && completeArray.push(todo));
    setCompletedTasks(completeArray.length);
  }, [todos]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  let today = new Date().toLocaleDateString("ban", { weekday: "long" });
  let date = new Date().toLocaleDateString("ban", { day: "numeric" });
  let month = new Date().toLocaleDateString("ban", { month: "short" });
  return (
    <div>
      <div className="date-section">
        <h4 className="date">
          {`${today},`} <span>{`${date} ${month}`}</span>
        </h4>
      </div>
      <div className="data-card-container">
        <div className="data-card">
          <p>Created Tasks</p>
          <h5>{todos.length < 10 ? `0${todos.length}` : todos.length}</h5>
        </div>
        <div className="data-card">
          <p>Completed Tasks</p>
          <h5>{completedTasks < 10 ? `0${completedTasks}` : completedTasks}</h5>
        </div>
      </div>
      <div className="todo-container">
        {todos.map((todoItem) => {
          const { id, todo, complete } = todoItem;
          return (
            <div key={id} className="todo-card">
              <div className="icon" onClick={() => toggleComplete(id)}>
                {!complete ? (
                  <FiCircle />
                ) : (
                  <IoIosCheckmarkCircle
                    className={complete ? "icon-done" : ""}
                  />
                )}
              </div>
              <p className={complete ? "text-done" : ""}>{todo}</p>
              <MdDeleteForever
                onClick={() => deleteTodo(id)}
                className="icon delete-icon"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoTable;
