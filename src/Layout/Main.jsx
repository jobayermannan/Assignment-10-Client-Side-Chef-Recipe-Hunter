import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer.jsx/Footer';
import Header from '../Pages/Shared/Header/Header';
import HOme from '../Pages/Shared/Home/HOme';

const Main = () => {
    return (
        <div>
            
             <HOme></HOme>
             <Footer></Footer>
             <Outlet></Outlet>
        </div>
    );
};

export default Main;