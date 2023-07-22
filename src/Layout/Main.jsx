import React from 'react';


import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../Pages/Shared/Banner/Banner';
import RecipesListNav from './../Pages/Shared/RecipesListNav/RecipesListNav';






const Main = () => {
    return (
        <div>
           <Header></Header>
           <Banner></Banner>
           <RecipesListNav></RecipesListNav>
           <Outlet></Outlet>
          
           <Footer></Footer>
       
         
        </div>
    );
};

export default Main;