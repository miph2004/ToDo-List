import React from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions/index";

const AddNewToDo = ({ dispatch }) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(addToDo(event.target.value.trim()));
      event.target.value = "";
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        onKeyDown={handleKeyDown}
      />
    </header>
  );
};
export default connect()(AddNewToDo);
