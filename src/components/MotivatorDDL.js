import React, { useState, useContext } from "react";
import { SearchContext } from "../contexts/SearchCriteria.js";

function MotivatorDropDown({valueChanged}) {
    const [items] = useState([
      { label: "D", value: "d" },
      { label: "I", value: "i" },
      { label: "S", value: "s" },
      { label: "C", value: "c" },
      { label: "DI", value: "di" },
      { label: "DS", value: "ds" },
      { label: "DC", value: "dc" },
      { label: "ID", value: "id" },
      { label: "IS", value: "is" },
      { label: "IC", value: "ic" },
      { label: "SD", value: "sd" },
      { label: "SI", value: "si" },
      { label: "SC", value: "sc" },
      { label: "CD", value: "cd" },
      { label: "CI", value: "ci" },
      { label: "CS", value: "cs" },
      { label: "DIS", value: "dis" },
      { label: "DIC", value: "dic" },
      { label: "DSC", value: "dsc" },
      { label: "IDS", value: "ids" },
      { label: "IDC", value: "idc" },
      { label: "ISC", value: "isc" },
      { label: "SDI", value: "sdi" },
      { label: "SDC", value: "sdc" },
      { label: "SIC", value: "sic" },
      { label: "CDI", value: "cdi" },
      { label: "CDS", value: "cds" },
      { label: "CIS", value: "cis" }
    ]);

    //debugger;
    const context = useContext(SearchContext);

    const itemChanged = async (val) => {      
    await context.dispatchCriteria({type: "MOTIVATOR_CHANGED", payload: val});    }

    return (
        <div>
          <select
              value={context.searchCriteria.motivator}
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

export default MotivatorDropDown;