import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from '../../Footer/Footer';


const LayoutNav = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}
export default LayoutNav;