import React from "react";
import "../css/App.css";
import AddNewToDo from "../containers/addToDo";
import VisibleToDoList from "../containers/visibleToDoList";
import Footer from "./Footer";

function App() {
  return (
    <div className="todoapp">
      <AddNewToDo />
      <VisibleToDoList />
      <Footer />
    </div>
  );
}

export default App;
