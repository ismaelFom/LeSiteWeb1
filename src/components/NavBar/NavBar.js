import React from 'react'
import NavBarContent from './NavBarContent';
import TopNavBar from './TopNavBar';

const NavBar = () => {
  return (
    <div style={{marginBottom:'50px'}}>
        <TopNavBar />
        <NavBarContent />      
    </div>
  )
}

export default NavBar;
