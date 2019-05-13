import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import React, { Component } from "react";
// import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Merchant from "./pages/Merchant";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Reviews from "./pages/Reviews";
import Grower from "./pages/Grower";
import Ads from "./pages/Ads";
import View from "./pages/View";
import ImageUpload from "./pages/UploadImageForm";
// import ViewGrowers from "./pages/ViewGrower";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />

            <Route exact path="/signup" component={SignUp} />

            <Route exact path="/merchant" component={Merchant} />
            <Route path="/merchant/reviews" component={Reviews} />
            {/* ads will have a sections to add new ads and view all ads */}
            <Route path="/merchant/ads" component={Ads} />
            <Route path="/merchant/viewgrowers" component={View} />
            <Route path="/merchant/growerinfo" component={Grower} />

            <Route path="/grower" component={Grower} />
            <Route path="/grower/reviews" component={Reviews} />
            <Route path="/ImageUpload" component={ImageUpload} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
