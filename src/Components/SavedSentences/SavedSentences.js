import React from "react";

const SavedSentences = ({savedSentences}) => {
console.log("saaaavedSENTENCE", savedSentences)
    return (
        <section>
                <div>
                  <h3>Saved Sentences</h3>
                  <h2 className="each-sentence">{savedSentences}</h2>
                </div>
        </section>
    );
  };
  
  export default SavedSentences;
  