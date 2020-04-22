import React from "react";
import "./App.css";
import SearchComponent from "./components/search.component";
import CountComponent from "./components/count.component";

function App() {
  return (
    <div className="App">
      <header className="App-header">Learn React</header>
      <CountComponent />
      <SearchComponent />
    </div>
  );
}

export default App;
