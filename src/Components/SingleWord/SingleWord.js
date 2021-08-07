import React from "react";
import "./SingleWord.css";
import WordoftheDay from "../WordsoftheDay/WordoftheDay";

// data.body.Word
//data.body.DefinitionMD
//data.body.urls.image
//data.body.Related[0].Word
//data.body.Related[0].Word.



const SingleWord = ({word, definition, image}) => {
    console.log("wordSTATE?", word)
    console.log("defffff", definition)
    console.log("imageee", image)
//   const {word, id} = props;

    return (

//  <section className="homepage-view">
// <header className="app-header">
//     <h1 className="app-title">Lessons from Abuelita </h1>
//     <div className="links">
//     <p className="saved-link">Saved Words & Sentences</p>
//     <p className="origin-story-link">About Us</p>
//     </div>
// </header>
        <section className="single-word-container">
            <img className="image-word" alt="image-of-word" src={image}/>
            <h1 className="random-word">
                {word}
            </h1>
            <p className="word-definition"> {definition} </p>
            <button className="go-to-form-view-btn">Let's Practice!</button>
        </section>
/* </section>  */

    )
  
};

export default SingleWord;
