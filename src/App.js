import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import React, { Component } from "react";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Merchant from "./pages/Merchant";
import Login from "./pages/Login";
import Reviews from "./pages/Reviews";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div>
          <switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/merchant" component={Merchant} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/reviews" component={Reviews} />
          </switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
