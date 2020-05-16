import React, { useState, useEffect, useContext, useReducer } from "react";
import DrupalDataService from "../services/DrupalService";
import MyEditor from "../components/MyEditor.js";
import OutcomeDropdown from "../components/OutcomeDDL.js";
import { SearchContext } from "../contexts/SearchCriteria.js";


const OutcomesList = () => {
  //debugger;
  const [paragraphs, setParagraphs] = useState([]);

  const [searchCriteria, dispatchCriteria] = useContext(SearchContext);

  const handleChange = (index,paragraph) => {
    // TODO: Couldnt get this to work as paragraph property only gave me the unchanged version??
    //debugger;
  };  

  let editors = [];  
  // This fires when an editor instance is instanciated
  const setInstance = instance => {
    editors = editors.concat(instance);
    //debugger; 
  }; 
  
  const updateParagraph = () => {
    //debugger;
    let i = 0;
    let j = 0;
    const retVal = paragraphs.map (function(origpara) {
      if (origpara.text !== editors[i].value()) {
        j+=1;
        let paraObject = {
          id: origpara.id,
          value: editors[i].value()
          };

        DrupalDataService.updatePara(paraObject)
        .then(response => {
          alert(JSON.stringify(response.data));
        })
        .catch(e => {
          console.log(e);
        });
      }
      i+=1;
    });
    j>0? alert((j) + ' paragraphs updated') : alert('no paragraphs changed');
  };

  useEffect(() => {
    retrieveParagraphs(searchCriteria.outcome);
  }, []);

  const retrieveParagraphs = (outcome) => {
    debugger
    DrupalDataService.getData(outcome)
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

      <div>
        <br/>
      <OutcomeDropdown valueChanged={retrieveParagraphs}/>
      <br/>
      </div>

      <div><h4 style={{display: 'inline-block'}}>{(searchCriteria.outcome)}/customer/cd</h4>
        <button style={{margin: '0 0 0 10px'}}
          onClick={() => {updateParagraph()}}
          className="button muted-button"
        >
          Save
        </button>
        </div>

        <ul className="list-group">
          {
            paragraphs.map((paragraph, index) => (
              <div className="para-block" key={paragraph.id}>
                <MyEditor
                  id={paragraph.id}
                  getMdeInstance={setInstance}
                  className={""}
                  label={paragraph.id}
                  value={paragraph.text}
                  onChange={()=>handleChange(index, paragraph)}
                />                
              </div>
              ))
          }
        </ul>
      </div>
    </div>
  );
};

export default OutcomesList;
