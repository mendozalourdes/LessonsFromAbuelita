import React from "react";
import SavedSentences from "../SavedSentences/SavedSentences";
import PropTypes from 'prop-types';

const SavedWordsSentences = ({ props }) => {
    
  const allSentences = props.savedSentences.map((sentence, index) => {
    return (
      <SavedSentences
        key={index}
        id={index}
        sentence={sentence}
        savedSentences={props.savedSentences}
      />
    );
  });

  return (
    <section>
        <h3 className="each-word">{props.savedWords.join(", ")}</h3>
        <h3 className="one-sentence"> {allSentences}</h3>
    </section>
  );
};

SavedWordsSentences.propTypes = {
  savedSentences: PropTypes.any.isRequired,
  savedWords: PropTypes.any.isRequired
}

export default SavedWordsSentences;
