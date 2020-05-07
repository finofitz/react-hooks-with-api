import React from "react";
import SimpleMDEReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

function MyEditor(props) {
    return (
        <SimpleMDEReact        
            className={""}
            label={props.label}
            value={props.value}
            onChange={props.onChange}

            options={{
                toolbar: ["bold", "italic", "heading-3", "|", "quote"],
                autofocus: false,
                spellChecker: false
                // etc.
            }}
      />
    );
  }

  export default MyEditor;