import React from "react";
import { Route } from "wouter";
import Header from "components/Header";
import Home from "pages/Home";
import Favorites from "pages/Favorites";
import OptionPage from "components/OptionPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <section className="container app-result">
        <OptionPage />
        <Route path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/404" component={() => <h1>404 Error</h1>} />
      </section>
    </div>
  );
}

export default App;
