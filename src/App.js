import React from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import React, { Component } from "react";
// import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Merchant from "./pages/Merchant";
import Login from "./pages/Login";
import Reviews from "./pages/Reviews";
import Grower from "./pages/Grower";
<<<<<<< HEAD
import ViewGrower from "./pages/ViewGrower";
import Ads from "./pages/Ads";
import NoMatch from "./pages/NoMatch";
=======
import Ads from "./pages/AdInfo";
import View from "./pages/View";
import ImageUpload from "./pages/UploadImageForm";
>>>>>>> 64ef3d7ba2fa2dff0532e2482fff3597851a34f6
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
      
        <div>
          <switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            
            <Route exact path="/signup" component={SignUp} />
<<<<<<< HEAD

            <Route path="/merchant" component={Merchant} />
            <Route exact path="/merchant/reviews" component={Merchant} />
            <Route exact path="/merchant/ads" component={Ads} />
            <Route exact path="/merchant/viewgrowers" component={ViewGrower} />

            <Route exact path="/grower" component={Grower} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/reviews" component={Reviews} />

            <Route exact path="/merchant/ad" component={Ads} />

            {/* <Route component={NoMatch} /> */}
=======
            
            <Route exact path="/merchant" component={Merchant} />
            <Route exact path="/merchant/reviews" component={Reviews} />
            {/* ads will have a sections to add new ads and view all ads */}
            <Route exact path="/merchant/ads" component={Ads} />
            <Route exact path="/merchant/viewgrowers" component={View} />

            <Route exact path="/grower" component={Grower} />
            <Route exact path="/grower/reviews" component={Reviews} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/reviews" component={Reviews} />
            <Route exact path="/ImageUpload" component={ImageUpload} />
>>>>>>> 64ef3d7ba2fa2dff0532e2482fff3597851a34f6
          </switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
