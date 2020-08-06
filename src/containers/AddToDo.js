import React from "react";
import "../css/AddToDo.css";

const AddToDo = ({ dispatch }) => {
  let input;
  const handleSubmit = (event) => {
    // event.preventDefault();
    // if (!input.value.trim()) {
    //   return;
    // }
    // dispatch(addTodo(input.value));
    // input.value = "";
  };

  return (
    <div class="new-todo">
      <input
        ref={(node) => (input = node)}
        class="new-todo__input"
        placeholder="What needs to be done?"
      />
    </div>
  );
};
export default AddToDo;
