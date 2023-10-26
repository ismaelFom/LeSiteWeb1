import React from 'react'
import { Outlet } from "react-router-dom";
import Errors from '../NavBarItems/Errors';
import Footer from '../Footer/Footer';

const LayoutError = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default LayoutError
