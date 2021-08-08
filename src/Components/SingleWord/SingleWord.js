import React from "react";
import "./SingleWord.css";
import WordoftheDay from "../WordsoftheDay/WordoftheDay";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


const SingleWord = ({ word, definition, image, newWord }) => {
    console.log("gimmmmee", definition)
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
        <img className="image-word" alt="image-of-word" src={image} />
        <h1 className="random-word">{word}</h1>
        <p className="word-definition"> {definition} </p>
        <NavLink to={"/form"}>
          <button className="go-to-form-view-btn word-button">
            Let's Practice!
          </button>
        </NavLink>
        <NavLink to={"/word"}>
          <button className="new-word-btn word-button" onClick={newWord}>
            Get A New Word
          </button>
        </NavLink>
      </section>
    </section>
  );
};

SingleWord.propTypes = {
    word: PropTypes.string.isRequired,
    definition: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired, 
    newWord: PropTypes.any.isRequired
  }

export default SingleWord;
