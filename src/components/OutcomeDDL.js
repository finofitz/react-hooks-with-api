import React, { useState, useContext } from "react";
import { SearchContext } from "../contexts/SearchCriteria.js";

function OutcomeDropDown({valueChanged}) {
    const [items] = useState([
      { label: "CommunicationStyle", value: "communicationstyle"},
      { label: "DecisionMaking", value: "decisionmaking" },      
      { label: "HowToManage", value: "howtomanage" },
      { label: "HowToMotivate", value: "howtomotivate" },
      { label: "HowToOnboard", value: "howtoonboard" },
      { label: "LeadershipStyle", value: "leadershipstyle" },
      { label: "Overview", value: "overview" },
      { label: "Strengths", value: "strengths" }
    ]);

    //debugger;
    const context = useContext(SearchContext);

    const itemChanged = async (val) => {      
      await context.dispatchCriteria({type: "OUTCOME_CHANGED", payload: val});
    }

    return (
        <div>
          <select
              value={context.searchCriteria.outcome}
              onChange={e => itemChanged(e.currentTarget.value)}
          >
          {items.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
            ))}
          </select>
        </div>
      );
}

export default OutcomeDropDown;