import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import React, { Component } from "react";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div>
          <switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={SignUp} />
          </switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
