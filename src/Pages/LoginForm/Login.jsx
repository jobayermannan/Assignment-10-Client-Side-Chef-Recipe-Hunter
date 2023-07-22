import React from 'react';
import { Form, Link } from 'react-router-dom';
import {  FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-500">
        <Form onSubmit="" className="w-2/5 bg-white rounded-lg shadow-lg p-10">
          <h1 className="text-4xl font-bold text-center mb-6">Login</h1>
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
  <div className='text-center'>
  <button className="btn mb-6 mr-2  text-black bg-gradient-to-r from-orange-300 to-pink-400 hover:from-purple-300 hover:to-zinc-600  md:w-auto">
    <span className="flex items-center justify-center">
      <FaGoogle></FaGoogle>
    </span>
    Google Login
  </button>
  <button className="btn outline-none text-black bg-gradient-to-t from-slate-300 to-rose-700 hover:from-pink-700 hover:to-sky-600 md:w-auto">
    <span className="flex items-center justify-center">
    <FaGithub></FaGithub>
    </span>
    GitHub Login
  </button>
  <h4 className='text-black'> Don't Have an Account ? <Link className='text-link text-blue-700' to="/register">Register</Link></h4>
  </div>
</div>

        </Form>
      </div>
      
      
      
    );
};

export default Login;