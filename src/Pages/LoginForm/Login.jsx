import React, { useContext, useState } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import {  FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
  const {signUser,SignInWithGoogle,SignInWithGItHUb}=useContext(AuthContext)


  const [error,setError] =useState('');
    const [success,setSuccess] =useState('');
    

    



  const navigate = useNavigate();
  const location=useLocation()
  console.log("shit bro",location)
  const from= location.state?.from?.pathname || "/recipe/0"

  const handleSignIn=(event)=>{
      event.preventDefault();
      const form= event.target;
      const email= form.email.value;
      const password= form.password.value;
      if (!email || !password) {
        setError(' Please enter your Email and password');
        return
      }
      setError('')
      setSuccess('')
      console.log(email, password)
      signUser(email, password).then((result)=>{console.log(result) 
         form.reset(); 
         setSuccess("successfully logged in");
         navigate(from , {replace:true})
        }).catch((error)=>{
          const errorMessage = error.message;
          setError(errorMessage)
        })
  }

  const handleGoogleSignIn=(event)=>{
    SignInWithGoogle().then((result)=>{console.log(result);navigate(from , {replace:true})}).catch((error)=>{console.log(error)})
  }
  const handleGitSignIn=(event)=>{
    SignInWithGItHUb().then((result)=>{console.log(result);navigate(from , {replace:true})}).catch((error)=>{console.log(error)})
  }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-500">
        <div  className="w-2/5 bg-white rounded-lg shadow-lg p-10">
          <h1 className="text-4xl font-bold text-center mb-6">Login</h1>
          <Form onSubmit={handleSignIn}> 
             <div className="mb-4">
            <label htmlFor="email" className="text-gray-600 ml-6">Email</label>
            <div className='mb-6 flex justify-center space-x-2'>
            <input type="text" id="email" name="email" className="input w-96" placeholder="Enter your email" />
            </div>
          
               </div>
            <div className="mb-6 ">
            <label htmlFor="password" className="text-gray-600  ml-6" >Password</label>
            <div className='mb-6 flex justify-center space-x-2 '>
            <input  type="password" id="password" name="password" className="input w-96" placeholder="Enter your password" />
            </div>
       
           
            
              </div>
            <div className='mb-6 flex justify-center space-x-2 '>
          <button className="btn outline-none text-white bg-gradient-to-r from-slate-950 to-emerald-600 hover:from-purple-600 hover:to-emerald-600  md:w-72">Login</button>
             </div>
          <div className="flex justify-center space-x-2">
                
        </div>
          
      <p className='text-primary fs-6 fw-semibold flex justify-center space-x-2 '>{error}</p>
      <div className='flex justify-center space-x-2 '>
      
        <p className='text-green-600'>
      {success}
               </p>

           </div>
        </Form>
        <div className='text-center'>
  <button onClick={handleGoogleSignIn} className="btn mb-6 mr-2  text-black bg-gradient-to-r from-orange-300 to-pink-400 hover:from-purple-300 hover:to-zinc-600  md:w-auto">
    <span className="flex items-center justify-center">
      <FaGoogle></FaGoogle>
    </span>
    Google Login
  </button>
  <button onClick={handleGitSignIn} className="btn outline-none text-black bg-gradient-to-t from-slate-300 to-rose-700 hover:from-pink-700 hover:to-sky-600 md:w-auto">
    <span className="flex items-center justify-center">
    <FaGithub></FaGithub>
    </span>
    GitHub Login
  </button>
  <h4 className='text-black'> Don't Have an Account ? <Link className='text-link text-blue-700' to="/register">Register</Link></h4>
  </div>

        </div>
      </div>
      
      
      
    );
};

export default Login;