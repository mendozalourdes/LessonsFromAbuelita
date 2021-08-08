import React from "react";
import { NavLink } from "react-router-dom";



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
          {errorMsg ===
            "That page does not exist. Go back home?" && (
            <NavLink to='/'>Home</NavLink>
          )}
      </section>
      </section>
      );
    };
     

export default Error;