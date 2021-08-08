import React from "react";
import SavedSentences from "../SavedSentences/SavedSentences";

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

export default SavedWordsSentences;
