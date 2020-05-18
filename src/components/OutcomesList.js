import React, { useState, useEffect, useContext, useReducer } from "react";
import DrupalDataService from "../services/DrupalService";
import MyEditor from "../components/MyEditor.js";
import OutcomeDropdown from "../components/OutcomeDDL.js";
import AudienceDropdown from "../components/AudienceDDL.js";
import MotivatorDropdown from "../components/MotivatorDDL.js";
import { SearchContext } from "../contexts/SearchCriteria.js";

const OutcomesList = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const {searchCriteria} = useContext(SearchContext);

  const handleChange = (index,paragraph) => {
    // TODO: Couldnt get this to work as paragraph property only gave me the unchanged version??
    //debugger;
  };  

  let editors = [];  
  // This fires when an editor instance is instanciated
  const setInstance = instance => {
    editors = editors.concat(instance);
  }; 
  
  const updateParagraph = () => {
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
          //alert(JSON.stringify(response.data));
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
    retrieveParagraphs(searchCriteria.outcome, searchCriteria.audience, searchCriteria.motivator);
  }, [searchCriteria]);

  const retrieveParagraphs = (outcome, audience, motivator) => {
    DrupalDataService.getData(outcome, audience, motivator)
      .then(response => {
        if (response.paragraphs.length > 0)
          setParagraphs(response.paragraphs);
        else
          setParagraphs([]);
        console.log(response.paragraphs);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      
      <div className="col-md-8">

      <div>
        <br/>
        <div style={{display: 'inline-block', margin: '0 10px 0 0'}} >
          <OutcomeDropdown valueChanged={retrieveParagraphs}/>
        </div>
        <div style={{display: 'inline-block', margin: '0 10px 0 0'}}>
          <AudienceDropdown valueChanged={retrieveParagraphs}/>
        </div>
        <div style={{display: 'inline-block', margin: '0 10px 0 0'}}>
          <MotivatorDropdown valueChanged={retrieveParagraphs}/>
        </div>
        <br/><br/>
      </div>

      <div><h5 style={{display: 'inline-block'}}>Drupal get path= {(searchCriteria.outcome)}/{(searchCriteria.audience)}/{(searchCriteria.motivator)}</h5>
        <button style={{margin: '0 0 0 10px', float: 'right'}}
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
                  label={"Drupal update key= " + paragraph.id}
                  value={paragraph.text}
                  onChange={()=>handleChange(index, paragraph)}
                />                
              </div>
              ))
          }
        </ul>
     

      <div>
        <button style={{margin: '0 0 0 10px', float: 'right'}}
          onClick={() => {updateParagraph()}}
          className="button muted-button"
        >
          Save
        </button>
        </div>

        </div>

    </div>
  );
};

export default OutcomesList;
