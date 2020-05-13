import React, { useState, useEffect } from "react";
import DrupalDataService from "../services/DrupalService";
import MyEditor from "../components/MyEditor.js";

const OutcomesList = () => {
  //debugger;
  const [paragraphs, setParagraphs] = useState([]);

  let editors = [];
  
  const handleChange = (index,paragraph) => {
    //debugger;
  };

  const setInstance = instance => {
    editors = editors.concat(instance);
    //debugger; 
  }; 
  
  const updateParagraph = () => {

    debugger;

    let i = 0;
    const retVal = paragraphs.map (function(origpara) {
      if (origpara.text !== editors[i].value()) {

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
  };

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
        <div><h4 style={{display: 'inline-block'}}>leadershipstyle/customer/cd</h4>
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
              <div className="para-block">
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
