import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//import AddTutorial from "./components/AddTutorial";
//import Tutorial from "./components/Tutorial";
import OutcomesList from "./components/OutcomesList";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/edit" className="navbar-brand">
            React Drupal Editor
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/edit"} className="nav-link">
                Edit
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/view"} className="nav-link">
                View
              </Link>
            </li>
          </div>
        </nav>
    </div>
        
          <Switch>
            <Route exact path={["/", "/edit"]} component={OutcomesList} />
          </Switch>
    </Router>
  );
}

export default App;
