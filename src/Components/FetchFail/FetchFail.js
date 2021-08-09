import React from "react";
import { NavLink } from "react-router-dom";
import ServerError from '../../assets/ServerError.png' 
import "./FetchFail.css";
import PropTypes from 'prop-types';
import papelPicado from "../../assets/papelPicado.jpg";



const FetchFail = ({errorMsg}) => {
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
      </header>
      <section className="error-message-container">
          <h2 className="error-text">{errorMsg}</h2>
          <div>
            {errorMsg ===
                "Sorry, something is wrong with Abuelita's page. Please try again later." && (
                    <NavLink to='/'>Try Again</NavLink>
                    )}
          </div>
                <img
                    className="error-image"
                    alt={"Error-Image"}
                    src={ServerError}
                  ></img>
      </section>
      </section>
      );
    };
     
    FetchFail.propTypes = {
        errorMsg: PropTypes.string.isRequired
      }

export default FetchFail;