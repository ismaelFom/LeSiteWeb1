import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';




const NavBarContent = () => {
  const [showSearch, setShowSearch] = useState(false);
  const okSearch = () => {
    setShowSearch(!showSearch)
  }


  return (
    <div>
      <div className="container-fluid position-relative p-0">
        <Navbar bg="dark" expand="lg" variant="dark" className="px-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="m-0">Sunshine</h1>
          </Link>
          <Navbar.Toggle aria-controls="navbarCollapse" />
          <Navbar.Collapse id="navbarCollapse">
            <Nav className="ms-auto py-0">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="/about" className="nav-item nav-link">About</Link>
              <NavDropdown title="Services" id="nav-dropdown-services">
                <Link to="/import" className="dropdown-item">Import</Link>
                <Link to="export" className="dropdown-item">Export</Link>
                <Link to="transit" className="dropdown-item">Transit</Link>
                <Link to="btp" className="dropdown-item">BTP</Link>
                <Link to="consultation" className="dropdown-item">Consultation</Link>
              </NavDropdown>
              <a href="#strengths" className="nav-item nav-link">Strengths</a>
              <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </Nav>
            <Button variant="" className="ms-3 btn-warning" onClick={okSearch}>
              <BsSearch />
            </Button>
            {showSearch && <input type="text" placeholder="Rechercher..." />}

          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  )
}

export default NavBarContent;
