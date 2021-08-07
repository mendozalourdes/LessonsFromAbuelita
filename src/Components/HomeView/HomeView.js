import React from "react";
import "./HomeView.css";
import { NavLink } from "react-router-dom";

const HomeView = () => {
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
          <NavLink to={"/word"}>
            <button className="word-button">
              <p className="word-link">Show Me A Word</p>
            </button>
          </NavLink>
          <p className="origin-story-link">About Us</p>
        </div>
      </header>

      <section className="main-container">
        <section className="main-section">
          <h3>
            Welcome to <h2>Lessons from Abuelita!</h2> This is a place where
            Abuelitas and nietes (grandkids) can come together to practice their
            Spanish together, share their culture, and create a beautiful
            connection that transcends borders and distance.
          </h3>
          <NavLink to={"/word"}>
            <button className="start-learning-btn">
              Let's start learning!
            </button>
          </NavLink>
        </section>
      </section>
    </section>
  );
};

export default HomeView;
