import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Pages/Shared/Header/Header';

import Footer from '../Pages/Shared/Footer/Footer';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
           
          
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LoginLayout;