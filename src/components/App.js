import React from "react";
import "../css/App.css";
import AddToDo from "../containers/AddToDo";
import VisibleTodoList from "./VisibleTodoList";

function App() {
  return (
    <div className="App">
      <h1 className="App__header">todos</h1>
      <AddToDo />
      {/* <VisibleTodoList /> */}
    </div>
  );
}

export default App;
