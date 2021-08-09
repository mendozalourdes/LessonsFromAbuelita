import React from "react";
import "./HomeView.css";
import { NavLink } from "react-router-dom";
import papelPicado from "../../assets/papelPicado.jpg";


const HomeView = () => {
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
          <NavLink to={"/word"}>
            <button className="word-button"
            id="wordBtn"
            >
              <p className="word-link">Show Me A Word</p>
            </button>
          </NavLink>
          <p className="origin-story-link">About Us</p>
        </div>
      </header>

      <section className="main-container">
        <body className="main-section">
          <h3>
            Welcome to <h2>Lessons from Abuelita!</h2> This is a place where
            Abuelitas and nietes (grandkids) can come together to practice their
            Spanish together, share their culture, and create a beautiful
            connection that transcends borders and distance.
          </h3>
          <NavLink to={"/word"}>
            <button className="start-learning-btn"
            id="startLearningBtn"
            >
              Let's start learning!
            </button>
          </NavLink>
        </body>
      </section>
    </section>
  );
};

export default HomeView;
