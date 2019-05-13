//React is imported in the case we will need to refer to usage of react
import React from "react";
//importing the css style page for this folder
import "./style.css";

//the jumbotron function takes in the value of what will be in the child's div
function Jumbotron({ children }) {
    return <div className="jumbotron mt-4">{children}</div>;
}

//exporting the jumbotron to be reused
export default Jumbotron;