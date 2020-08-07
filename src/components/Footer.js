import React from "react";
import FilterLink from "../containers/filterLink";
import { VisibilityFilters, clearCompleted } from "../actions/index";
import { connect } from "react-redux";

const Footer = (props) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.todos.length} item left</strong>
      </span>
      <ul className="filters">
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>

        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>

        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </ul>
      <button className="clear-completed" onClick={props.clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

const mapStateToProps = (state) => ({
  todos: state.toDos.filter((t) => !t.completed),
});
const mapDispatchToProps = (dispatch) => ({
  clearCompleted: () => dispatch(clearCompleted()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
