import React from "react";
import "./SingleWord.css";
import WordoftheDay from "../WordoftheDay/WordoftheDay";

// data.body.Word
//data.body.DefinitionMD
//data.body.urls.image
//data.body.Related[0].Word
//data.body.Related[0].Word.



const SingleWord = ({word, definition}) => {
    console.log("wordSTATE?", word)
    console.log("defffff", definition)
//   const {word, id} = props;

    return (
        <div className="single-word-container">
            <h1 className="random-word">
                {word}
            </h1>
            <p> {definition} </p>


        </div>

    )
  
//     const  = props.word.map((word) => {
//     return (
//       <Movie
//         key={movie.id}
//         id={movie.id}
//         image={movie.poster_path}
//         showMovieDetails={props.showMovieDetails}
//         backdrop={props.backdrop_path}
//         title={movie.title}
//         cleanInputs={props.cleanInputs}
//       />
//     );
//   });
//   return (
//     <div>
//       <section className="movie-container">{movieComponents}</section>
//     </div>
//   );
};

export default SingleWord;
