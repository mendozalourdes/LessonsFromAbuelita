import React from "react";

  const SavedWords = (props) => {
    console.log("saaaavedWord", props)
    console.log("savedWordsSection", props.savedWords)
        return (
            // <section>
            //         <div>
                      <h2 className="each-word">{(props.savedWords).join(', ')}</h2>
            //         </div>
            // </section>
        );
      };
      
      export default SavedWords;
      


  
//   import React from "react";


// const SavedWordsSentences = ({props}) => {
// console.log("props", props)
// // console.log("")
//     // const eachWord = props.savedWords.map(word => word)
//     const eachWord = props.savedWords.map((word, index) => {
//         return (
//            word
//             )
            
//     })
//     const eachSentence = props.savedSentences.map(sentence => sentence)
//     console.log("eachWord", eachWord)    
//     console.log("eachSentence", eachSentence)    


//     // const eachWord = props.savedWords.map((word) => {
//     //   return (
//     //     <Movie
//     //       key={movie.id}
//     //       id={movie.id}
//     //       image={movie.poster_path}
//     //       showMovieDetails={props.showMovieDetails}
//     //       backdrop={props.backdrop_path}
//     //       title={movie.title}
//     //     />
//     //   );
//     // });
//     return (
//         <section>
//             <div>
//                   <h3>Saved Sentences</h3>
//                   <h2 className="each-sentence">{eachSentence}</h2>
//                 </div>
//                 <div>
//                   <h3>Saved Words</h3>
//                   <h2 className="each-word">{eachWord}</h2>
//                 </div>
//         </section>

//     //   <div>
//     //       {eachWord}
//     //       {eachSentence}
//     //     {/* <section className="movie-container">{movieComponents}</section> */}
//     //   </div>
//     );
//   };
  
//   export default SavedWordsSentences;
  