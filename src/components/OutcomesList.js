import React, { useState, useEffect } from "react";
import DrupalDataService from "../services/DrupalService";
import { Link } from "react-router-dom";

const OutcomesList = () => {
  debugger;
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    retrieveParagraphs();
  }, []);

  const retrieveParagraphs = () => {
    DrupalDataService.getData()
      .then(response => {
        setParagraphs(response.paragraphs);
        console.log(response.paragraphs);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      
      <div className="col-md-6">
        <h4>leadershipstyle/customer/cd</h4>

        <ul className="list-group">
          {
            paragraphs.map((paragraph, index) => (
              <div className="para-block">
                {paragraph.text}
              </div>
              ))
          }
        </ul>
      </div>
    </div>
  );
};

export default OutcomesList;
