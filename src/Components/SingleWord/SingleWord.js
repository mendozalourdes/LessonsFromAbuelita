import React from "react";
import "./SingleWord.css";
import WordoftheDay from "../WordsoftheDay/WordoftheDay";
import { NavLink } from "react-router-dom";


const SingleWord = ({word, definition, image}) => {

    return (

 <section className="homepage-view">
<header className="app-header">
    <NavLink to={"/"}>
            <button className="title-button">
                <h1 className="app-title">Lessons from Abuelita </h1>
            </button>
        </NavLink>
        <div className="links">
        <NavLink to={"/form"}>
            <button className="saved-button">
              <p className="saved-link">Saved Words & Sentences</p>
            </button>
        </NavLink>
            <p className="origin-story-link">About Us</p>
          </div>
</header>
        <section className="single-word-container">
            <img className="image-word" alt="image-of-word" src={image}/>
            <h1 className="random-word">
                {word}
            </h1>
            <p className="word-definition"> {definition} </p>
            <NavLink to={"/form"}>
                <button className="go-to-form-view-btn">Let's Practice!</button>
            </NavLink>


        </section>
 </section>  

    )
  
};

export default SingleWord;
