import React from "react";
import SavedSentences from "../SavedSentences/SavedSentences";
import PropTypes from "prop-types";

const SavedWordsSentences = ({ props }) => {
  console.log("props??", props);

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
      <p className="each-word">{props.savedWords.join(", ")}</p>
      <div id="oneSentence" className="one-sentence">
        {" "}
        {allSentences}
      </div>
    </section>
  );
};

SavedWordsSentences.propTypes = {
  savedSentences: PropTypes.array,
  savedWords: PropTypes.array,
};

export default SavedWordsSentences;
