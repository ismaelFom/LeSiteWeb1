import React from 'react';
import { Outlet } from "react-router-dom";
// import Navb from '../nav/Navb';
// import Footer from './footer';


const LayoutNav = () => {
  return (
    <>
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}
export default LayoutNav;