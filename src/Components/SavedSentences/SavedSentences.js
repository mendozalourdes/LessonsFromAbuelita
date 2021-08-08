import React from "react";
import PropTypes from 'prop-types';


const SavedSentences = (props) => {

    return (

        <h2 className="each-sentence">{props.sentence}</h2>
  
    );
  };

  SavedSentences.propTypes = {
    sentence: PropTypes.string.isRequired
  }
  
  export default SavedSentences;
  