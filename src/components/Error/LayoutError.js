import React from 'react'
import { Outlet } from "react-router-dom";
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
