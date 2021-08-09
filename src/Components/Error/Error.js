import React from "react";
import { NavLink } from "react-router-dom";
import UserError from '../../assets/UserError.png' 
import PropTypes from 'prop-types';


const Error = ({errorMsg}) => {
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
                    alt={"User-Error-Image"}
                    src={UserError}
                    id="userErrorImg"
                  ></img>
      </section>
      <div>
          {errorMsg ===
            "That page does not exist. Go back home?" && (
            <NavLink to='/'> Take Me to Abuelita's Home</NavLink>
          )}
      </div>
      </section>
      );
    };

    Error.propTypes = {
      errorMsg: PropTypes.string.isRequired
    }
     



export default Error;