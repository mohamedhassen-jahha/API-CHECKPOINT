import React from "react";
import { Container, Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">USERS DASHBOARD</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mohamed Hassen JAHHA</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
