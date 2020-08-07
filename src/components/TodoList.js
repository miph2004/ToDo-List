import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="main">
      <input className="toggle-all" />
      <label htmlFor="toggle-all" onClick={() => props.toggleAllTodo()}></label>
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            toggleTodo={() => props.toggleTodo(todo.id)}
            deleteTodo={() => props.deleteTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
