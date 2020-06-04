import React from "react";
import "./App.css";
import { sayHelloVar, sayHelloLet } from "./ES6/VarLetConst";
import { person, walk } from "./ES6/ThisKeyword";
function App() {
  return <div className="App">{walk()}</div>;
}

export default App;
