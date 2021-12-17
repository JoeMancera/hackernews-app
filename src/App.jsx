import React from "react";
import { Route, Link } from "wouter";
import Home from "pages/Home";
import Favorites from "pages/Favorites";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hacker news</h1>
      </header>
      <div>Here check</div>
      <Route path="/" component={Home} />
      <Route path="/favorites" component={Favorites} />
    </div>
  );
}

export default App;
