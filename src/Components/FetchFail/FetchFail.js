import React from "react";
import { NavLink } from "react-router-dom";
import ServerError from '../../assets/ServerError.png' 
import "./FetchFail.css";


const FetchFail = ({errorMsg}) => {
    return (
     
         <section className="homepage-view">
      <header className="app-header">
        <NavLink to={"/"}>
          <button className="title-button">
            <h1 className="app-title">Lessons from Abuelita </h1>
          </button>
        </NavLink>
      </header>
      <section>
          <h2>{errorMsg}</h2>
                <img
                    className="error-image"
                    alt={"Error-Image"}
                    src={ServerError}
                  ></img>
      </section>
      <div>
        {errorMsg ===
            "Sorry, something is wrong with Abuelita's page. Please try again later." && (
                <NavLink to='/'>Try Again</NavLink>
                )}
      </div>
      </section>
      );
    };
     

export default FetchFail;