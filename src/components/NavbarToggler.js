import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function NavbarToggler(handleHomeClick) {
  return (
    <div className="d-block d-md-none">
      {[false].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          className="p-0"
          collapseOnSelect
        >
          <div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              style={{ width: "40%" }}
              collapseOnSelect
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 mobile-nav" >
                  <Nav.Link as={Link} to="/" onClick={handleHomeClick}>
                    <i className="fa-solid fa-house"></i> Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blog">
                    <i className="fa-solid fa-book-open"></i> Blog
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact">
                    <i className="fa-regular fa-id-card"></i> Contact
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </div>
        </Navbar>
      ))}
    </div>
  );
}

export default NavbarToggler;
