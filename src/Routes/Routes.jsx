import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category";
import ChefLayout from "../Layout/ChefLayout";
import Recipe from "../Pages/Recipe/Recipe";

import Login from "../Pages/LoginForm/Login";
import LoginLayout from "./../Layout/Loginlayout";
import RegisterForm from './../Pages/RegisterForm/RegisterForm';
import Blog from "../Pages/Shared/Blog/Blog";
import About from "../Pages/Shared/About/About";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([


  { 
       path: "/",
       element: <LoginLayout></LoginLayout>,
       children:[
        {
          path: "/",
          element:<Navigate to="/recipe/0"></Navigate>
        },
        
          {
            path: "blog", // Set this to an empty string for the Home component
            element: <Blog />
          },
          {
            path: "about", // Set this to an empty string for the Home component
            element: <About />
          },
        
        {
          path: "/login",
          element: <Login></Login>
        },{
          path: "/register",
          element: <RegisterForm></RegisterForm>
        }
       ]

  },
  


  {
    path: "/recipe/",
    element: <Main />,
    children: [
      
      {
        path: ":id", // Set this without the leading slash
        element:<Category />,
        loader: ({ params }) => fetch(`http://localhost:5000/lists/${params.id}`)
      },
    ]
  },
  {
    path: "chef", // Set this without the leading slash
    element: <ChefLayout /> ,
    children: [
 
      {
        path: ":id", // Set this without the leading slash to nest ChefCard under /chef/:id
        element: <PrivateRoutes><Recipe />,</PrivateRoutes>
   
      }
    ]
  }
]);

export default router;
