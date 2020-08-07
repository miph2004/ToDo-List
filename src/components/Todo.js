import React from "react";

const Todo = ({ toggleTodo, deleteTodo, completed, text }) => (
  <li className={completed ? "completed" : ""}>
    <div className="view">
      <input className="toggle" type="checkbox" onClick={toggleTodo} />
      <label>{text}</label>
      <button className="destroy" onClick={deleteTodo}></button>
    </div>
  </li>
);

export default Todo;
