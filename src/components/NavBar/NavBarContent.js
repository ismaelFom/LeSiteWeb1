import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import LanguageSwitcher from '../../langues/LanguageSwitcher';
// import Logo from './Logo';
import sansh from './sansh.png';



const NavBarContent = () => {


  return (
    <div className="container-fluid position-relative p-0">
      <Navbar bg="dark" expand="lg" variant="dark" className="px-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <img src={sansh} alt='sansh' style={{width:'100px', height: '70px' }} ></img>
          <h1 className="m-0" style={{ float: 'right', paddingTop:'35px'}}>Sunshine</h1>
        </Link>
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto py-0">
            <Link to="/" className="nav-item nav-link active">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <NavDropdown title="Services" id="nav-dropdown-services">
              <Link to="import" className="dropdown-item">Import</Link>
              <Link to="export" className="dropdown-item">Export</Link>
              <Link to="btp" className="dropdown-item">BTP</Link>
              <Link to="negoces" className="dropdown-item">Negoce</Link>
              <Link to="consultation" className="dropdown-item">Consultation</Link>
              <Link to="Ok_transits" className="dropdown-item">Transit</Link>
            </NavDropdown>
            <a href="/strengths" className="nav-item nav-link">Strengths</a>

            <a className="nav-item nav-link" href="/strengths"> <div id="google_translate_element"></div> </a>

            {/* <LanguageSwitcher /> */}
            <Link to="/CallUsForQuotes" className="nav-item nav-link">Call For Quote</Link>
          </Nav>


        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBarContent;

