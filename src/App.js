import React from "react";
import Nav from "./Components/Nav/Nav";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import "./App.css";
import "./Components/Auth/Auth.css";
import "./Components/Dashboard/Dashboard.css";
import "./Components/Form/Form.css";
import "./Components/Nav/Nav.css";
import "./Components/Post/Post.css";
import "./reset.css"

function App(props) {
  console.log(props.location);
  return (
    <div className="app">
      <header className="appHeader">
        {props.location.pathname === "/" ? "" : <Nav />}
        {routes}
      </header>
    </div>
  );
}

export default withRouter(App);
