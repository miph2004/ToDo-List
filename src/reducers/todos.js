const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "TOGGLE_ALL_TODO":
      return state.map((todo) => ({ ...todo, completed: true }));
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "CLEAR_COMPLETED":
      const newState = [];
      state.forEach((element) => {
        if (!element.completed) {
          newState.push(element);
        }
      });
      return newState;

    default:
      return state;
  }
};
export default todos;
