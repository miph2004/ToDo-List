import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import App from "./components/App";

// const store = createStore(rootReducer);

ReactDOM.render(
  // <Provider>
  <App />,
  // </Provider>
  document.getElementById("root")
);
