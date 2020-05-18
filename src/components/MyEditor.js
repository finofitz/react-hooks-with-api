import React from "react";
import SimpleMDEReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

function MyEditor(props) {
    return (
        <SimpleMDEReact
            id={props.id}
            getMdeInstance={props.getMdeInstance}        
            className={""}
            label={props.label}
            value={props.value}
            onChange={props.onChange}
                                            //https://github.com/Ionaru/easy-markdown-editor#configuration
            options={{
                toolbar: ["bold", "italic", "heading-3", "|", "unordered-list", "ordered-list","preview"],
                autofocus: false,
                spellChecker: false,                
                minHeight: "20px"
                // etc.
            }}
      />
    );
  }

  export default MyEditor;