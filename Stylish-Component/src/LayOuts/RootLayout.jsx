import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;