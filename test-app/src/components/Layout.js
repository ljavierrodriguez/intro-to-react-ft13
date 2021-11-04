import React from 'react';
import Footer from './Footer';
import { Navbar } from './Navbar';

const Layout = ({ children, navbar }) => {
    return (
        <>
            { navbar === true && <Navbar /> }
            {children}
            <Footer />
        </>
    )
}

export default Layout;