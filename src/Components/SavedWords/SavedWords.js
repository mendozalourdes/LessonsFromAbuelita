import React from "react";

  const SavedWords = (props) => {

        return (
  
             <h2 className="each-word">{(props.savedWords).join(', ')}</h2>

        );
      };
      
      export default SavedWords;
      
