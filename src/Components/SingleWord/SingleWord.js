import React from "react";
import "./SingleWord.css";
import WordoftheDay from "../WordsoftheDay/WordoftheDay";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import papelPicado from "../../assets/papelPicado.jpg";
import banderas from "../../assets/banderas.png";


const SingleWord = ({ word, definition, image, newWord }) => {

  return (
    <section className="homepage-view">
      <header className="app-header">
        <article className="heading-section-image-text">
          <img className="papel-picado" alt="papel-picado" src={papelPicado}></img>
        <NavLink to={"/"}>
          <button className="title-button">
            Lessons from Abuelita 
          </button>
        </NavLink>
        </article>
        <div className="links">
          <NavLink to={"/form"}>
          <button className="saved-button"
            id="savedBtn"
            >
              <p className="saved-link">Saved Words & Sentences</p>
            </button>
          </NavLink>
          {/* <p className="origin-story-link">About Us</p> */}
        </div>
      </header>
      <section className="whole-word-container">
      <section className="single-word-container">
       <img className="banderas" alt="banderas" src={banderas}></img> 
        <img className="image-word" id="wordImage" alt="image-of-word" src={image} />
        <h1 className="random-word" id="randomWord">{word}</h1>
        <p className="word-definition"> {definition} </p>
        <section className="buttons-section">
        <NavLink to={"/form"}>
          <button className="go-to-form-view-btn word-button"
          id="formViewBtn"
          >
            Let's Practice!
          </button>
        </NavLink>
        <NavLink to={"/word"}>
          <button className="new-word-btn word-button" id="getNewWord" onClick={newWord}>
            Get A New Word
          </button>
        </NavLink>
        </section>
      </section>
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
