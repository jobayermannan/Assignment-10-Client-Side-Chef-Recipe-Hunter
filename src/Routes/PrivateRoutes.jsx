import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loader}= useContext(AuthContext);
    console.log("user in private routes", user);
    const location=useLocation()
    console.log(location)

    if (loader){
        return <><span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span></> 
    }
    if (user){
        return children
    }
 

    return<Navigate  state={{from:location}} to="/login" replace></Navigate>
};

export default PrivateRoutes;