import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Pokmon.png";
import { FavButton } from "./favbutton";
import { Navbar, Nav } from "react-bootstrap";
// import React, { useContext } from "react";

// import { Context } from "../store/appContext";

export const NavigationBar = () => {
  // const { store, actions } = useContext(Context);

  return (
    <>
      <Navbar expand="lg">
        <div className="container">
            <Link className="text-center orange-text" to="/">
              <img src={logo} alt="Pokemón logo" width="180" />
            </Link>
          <Navbar.Toggle
            className="btn-orange orange-text"
            variant="outline-light"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/favoritos">
                Ver Favoritos
              </Link>
              <FavButton />
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};
