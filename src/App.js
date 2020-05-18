import React, { useState, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { SearchContext } from "./contexts/SearchCriteria.js";

import OutcomesList from "./components/OutcomesList";

 //= useContext(SearchContext);

 const initialstate = { outcome: 'howtomanage', audience: 'customer', motivator: 'cd' };

 const OUTCOME_CHANGED = 'OUTCOME_CHANGED';
 const AUDIENCE_CHANGED = 'AUDIENCE_CHANGED';
 const MOTIVATOR_CHANGED = 'MOTIVATOR_CHANGED';

 const criteriaReducer = (state, action) => {
   debugger;
     switch (action.type) {
       case OUTCOME_CHANGED:
         return {...state, outcome: action.payload};
       case AUDIENCE_CHANGED:
         return {...state, audience: action.payload};
       case MOTIVATOR_CHANGED:
          return {...state, motivator: action.payload};            
       default:
         return initialstate;
     }
   };

function App() {  

  const [searchCriteria, dispatchCriteria] = useReducer(criteriaReducer, initialstate)

  return (
    <SearchContext.Provider value={{searchCriteria, dispatchCriteria}}>
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
    </SearchContext.Provider>
  );
}

export default App;
