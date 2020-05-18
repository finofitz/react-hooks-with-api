import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "../contexts/SearchCriteria.js";

function AudienceDropDown({valueChanged}) {
    const [items, setItems] = useState([
      { label: "Customer", value: "customer"},
      { label: "Individual", value: "individual" }
    ]);

    const [custOnly] = [
      { label: "Customer", value: "customer"}
    ];

    const [allItems] = [
      { label: "Customer", value: "customer"},
      { label: "Individual", value: "individual" }
    ];

    //debugger;
    const context = useContext(SearchContext);

    //useEffect(() => {
    //  context.searchCriteria.outcome != "overview" ? setItems(allItems) : setItems(custOnly);
    //}, [context.searchCriteria]); 

    const itemChanged = async (val) => {      
    await context.dispatchCriteria({type: "AUDIENCE_CHANGED", payload: val});
    }

    return (
        <div>
          <select
              value={context.searchCriteria.audience}
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

export default AudienceDropDown;