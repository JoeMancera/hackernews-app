import React from "react";
import { Route } from "wouter";
import Header from "components/Header";
import Home from "pages/Home";
import Favorites from "pages/Favorites";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="container">
        <div>Here check</div>
        <Route path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
      </section>
    </div>
  );
}

export default App;
