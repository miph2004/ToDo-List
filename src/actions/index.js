let nextToDoId = 0;

export const addToDo = (text) => ({
  type: "ADD_TODO",
  id: nextToDoId++,
  text,
});
export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id,
});
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id,
});
export const toggleAllTodo = () => ({
  type: "TOGGLE_ALL_TODO",
});
export const clearCompleted = () => ({
  type: "CLEAR_COMPLETED",
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
