import React from "react";
import { NavLink } from "react-router-dom";
import UserError from "../../assets/UserError.png";
import PropTypes from "prop-types";
import papelPicado from "../../assets/papelPicado.jpg";
import "./Error.css";

const Error = ({ errorMsg }) => {
  return (
    <section className="homepage-view">
      <header className="app-header">
        <article className="heading-section-image-text">
          <img
            className="papel-picado"
            alt="papel-picado"
            src={papelPicado}
          ></img>
          <NavLink to={"/"}>
          <button id="titleBtn" className="title-button">Lessons from Abuelita</button>
          </NavLink>
        </article>
      </header>
      <section className="error-message-container">
        <h2 className="error-text">{errorMsg}</h2>
        <div>
          {errorMsg === "That page does not exist. Go back home?" && (
            <NavLink to="/"> Take Me to Abuelita's Home</NavLink>
          )}
        </div>
        <img
          className="error-image"
          alt={"User-Error-Announcement"}
          src={UserError}
          id="userErrorImg"
        ></img>
      </section>
    </section>
  );
};

Error.propTypes = {
  errorMsg: PropTypes.string.isRequired,
};

export default Error;
