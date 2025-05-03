import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Pokmon.png";
import { FavButton } from "./favbutton";
import { Navbar, Nav, Container } from "react-bootstrap";

export const NavigationBar = () => {
  return (
    <Navbar expand="lg" collapseOnSelect className="nav-bar shadow">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          <img className="py-1" src={logo} alt="Pokemón logo" width="180" />
        </Link>

        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          className="btn-orange orange-text ms-auto"
        />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/favoritos" className="nav-link">
              Ver Favoritos
            </Nav.Link>
            <FavButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};