import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import React, { Component } from "react";
// import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Merchant from "./pages/Merchant";
import Login from "./pages/Login";
import Reviews from "./pages/Reviews";
import Grower from "./pages/Grower";
import ViewGrower from "./pages/ViewGrower";
import Ads from "./pages/Ads";
import NoMatch from "./pages/NoMatch";
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

            <Route path="/merchant" component={Merchant} />
            <Route exact path="/merchant/reviews" component={Merchant} />
            <Route exact path="/merchant/ads" component={Ads} />
            <Route exact path="/merchant/viewgrowers" component={ViewGrower} />

            <Route exact path="/grower" component={Grower} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/reviews" component={Reviews} />

            <Route exact path="/merchant/ad" component={Ads} />

            {/* <Route component={NoMatch} /> */}
          </switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
