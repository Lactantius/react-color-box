import React from "react";
import "./App.css";
import BoxList from "./BoxList";

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Make Boxen</h1>
      <BoxList />
    </div>
  );
}

export default App;
