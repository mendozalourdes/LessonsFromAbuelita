import React from "react";
import PropTypes from 'prop-types';


const SavedSentences = (props) => {

    return (
            <p className="each-sentence">{props.sentence}</p>

    );
  };

  SavedSentences.propTypes = {
    sentence: PropTypes.string.isRequired
  }
  
  export default SavedSentences;
  