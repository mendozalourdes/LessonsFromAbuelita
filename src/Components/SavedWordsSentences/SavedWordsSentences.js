import React from "react";
import SavedWords from "../SavedWords/SavedWords";
import SavedSentences from "../SavedSentences/SavedSentences";

const SavedWordsSentences = ({props}) => {

    const allSentences = props.savedSentences.map((sentence, index) => {
        return (
            <SavedSentences
            key={index}
            id={index}
            sentence={sentence}
            />
        )
    })
    
    // const MoviesRepo = (props) => {
    //     const movieComponents = props.movies.map((movie) => {
    //       return (
    //         <Movie
    //           key={movie.id}
    //           id={movie.id}
    //           image={movie.poster_path}
    //           showMovieDetails={props.showMovieDetails}
    //           backdrop={props.backdrop_path}
    //           title={movie.title}
    //           cleanInputs={props.cleanInputs}
    //         />
    //       );
    //     });
    //     return (
    //       <div>
    //         <section className="movie-container">{movieComponents}</section>
    //       </div>
    //     );
    //   };
      
    //   export default MoviesRepo;
      
    return (
        <section>
            <div>
                  {/* <h3>Saved Sentences</h3> */}
                  <h2 className="each-sentence"><SavedSentences savedSentences={props.savedSentences}/></h2>
                </div>
                <div>
                  {/* <h3>Saved Words</h3> */}
                  <h2 className="each-word"><SavedWords savedWords={props.savedWords}/></h2>

                  {/* <h2 className="each-word">{props.savedWords}</h2> */}
                </div>
        </section>

    //   <div>
    //       {eachWord}
    //       {eachSentence}
    //     {/* <section className="movie-container">{movieComponents}</section> */}
    //   </div>
    );
  };
  
  export default SavedWordsSentences;
  