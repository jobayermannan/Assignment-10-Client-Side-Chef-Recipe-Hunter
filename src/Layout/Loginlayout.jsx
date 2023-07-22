import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Pages/Shared/Header/Header';
import Login from '../Pages/LoginForm/Login';

const LoginLayout = () => {
    return (
        <div>
            <Header></Header>
          
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;