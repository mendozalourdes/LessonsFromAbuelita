import React from "react";


const SavedWordsSentences = ({props}) => {
console.log("props", props)
    const eachWord = props.savedWords.map(word => word)
    const eachSentence = props.savedSentences.map(sentence => sentence)
    // console.log("eachWord", eachWord)    
    // console.log("eachSentence", eachSentence)    


    // const eachWord = props.savedWords.map((word) => {
    //   return (
    //     <Movie
    //       key={movie.id}
    //       id={movie.id}
    //       image={movie.poster_path}
    //       showMovieDetails={props.showMovieDetails}
    //       backdrop={props.backdrop_path}
    //       title={movie.title}
    //     />
    //   );
    // });
    return (
      <div>
          {eachWord}
        {/* <section className="movie-container">{movieComponents}</section> */}
      </div>
    );
  };
  
  export default SavedWordsSentences;
  