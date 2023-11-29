import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import LanguageSwitcher from '../../langues/LanguageSwitcher';
// import Logo from './Logo';
import sansh from './sansh.png';
import { useTranslation } from 'react-i18next';
 



const NavBarContent = () => {

  const { t } = useTranslation();

  return (
    <div className="container-fluid position-relative p-0">
      <Navbar bg="dark" expand="lg" variant="dark" className="px-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <img src={sansh} alt='sansh' style={{width:'100px', height: '70px' }} ></img>
          {/* <h1 className="m-0" style={{ float: 'right', paddingTop:'35px'}}>Sunshine</h1> */}
        </Link>
        <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse">
          <Nav className="ms-auto py-0">
            <Link to="/" className="nav-item nav-link active">{t('Home')}</Link>
            <Link to="/about" className="nav-item nav-link">{t('About')}</Link>
            <NavDropdown title="Services" id="nav-dropdown-services">
              <Link to="import" className="dropdown-item">{t('Import')}</Link>
              <Link to="export" className="dropdown-item">{t('Export')}</Link>
              <Link to="btp" className="dropdown-item">{t('BTP')}</Link>
              <Link to="negoces" className="dropdown-item">{t('Negoce')}</Link>
              <Link to="consultation" className="dropdown-item">{t('Consultation')}</Link>
              <Link to="Ok_transits" className="dropdown-item">{t('Transit')}</Link>
            </NavDropdown>
            <a href="/strengths" className="nav-item nav-link">{t('Strengths')}</a>

            {/* <a className="nav-item nav-link" href="/strengths"> </a> */}
            <div id="google_translate_element"></div> 
            <Link to="/CallUsForQuotes" className="nav-item nav-link">{t('Call For Quote')}</Link>

            {/* <a className="nav-item nav-link" style={{ color: 'black' }}><LanguageSwitcher /></a> */}
          </Nav>


        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBarContent;

