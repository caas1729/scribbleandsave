import "./NavBar.css";
import { Link } from "react-router-dom";
import React from "react";
import { useAuth0 } from '@auth0/auth0-react'
const NavBar = ({ items, index_ }) => {
  const {
    isAuthentic,
    loginWithRedirect,
    logout
  } = useAuth0();
  return (
    <ul>
      {items.map((el, index) => {
        if (index === index_) {
          if (el === "Home") {
            return (
              <li key={el}>
                <Link className={"active"} to="/">
                  Home
                </Link>
              </li>
            );
          } else {
            return (
              <li key={el}>
                <Link to={el} className={"active"}>
                  {el}
                </Link>
              </li>
            );
          }
        } else {
          if (el === "Home") {
            console.log("help");
            return (
              <li key={el}>
                <Link to={"/"}>Home</Link>
              </li>
            );
          } else {
            return (
              <li key={el}>
                <Link to={el}>{el}</Link>
              </li>
            );
          }
        }
      })
        }
      {!isAuthentic ? (
        <li>
          <a href="#" onClick={() => loginWithRedirect()} style={{cursor: "pointer"}}>
            Login
          </a>
        </li>
      ): (
        <li>
          <a href="#" onClick={() => logout({returnTo: window.location.origin})}>
            Logout
          </a>
        </li>
      )}
    </ul>
  );
};

export default NavBar;
