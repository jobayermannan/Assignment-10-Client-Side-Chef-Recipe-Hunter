import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const RegisterForm = () => {
const {createUser}=useContext(AuthContext);
const handleCreateUser = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, password, photo,email)
    createUser(email,password).then((result)=>{
      const loggedUser =result.user;
      console.log(loggedUser);
    }).catch (err => {
      console.error(err);
    })
    
}
return (
  <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 to-pink-500">
    <Form onSubmit={handleCreateUser} className="w-2/5 bg-white rounded-lg shadow-lg p-10">
      <h1 className="text-4xl font-bold text-center mb-2">Register</h1>
      <div className="">
        <label htmlFor="photoURL" className="text-gray-600 ml-6">  Photo URL</label>
        <div className='mb-4 flex justify-center space-x-2'>
        <input type="text" id="photo" name="photo" className="input w-96" placeholder="Enter your Photo URL" />
        </div>
      
      </div>
      <div className="">
        <label htmlFor="Name" className="text-gray-600 ml-6">Name</label>
        <div className='mb-4 flex justify-center space-x-2'>
        <input type="text" id="name" name="name" className="input w-96" placeholder="Enter your name" />
        </div>
      
      </div>
      <div className="">
        <label htmlFor="email" className="text-gray-600 ml-6">Email</label>
        <div className='mb-4 flex justify-center space-x-2'>
        <input type="text" id="email" name="email" className="input w-96" placeholder="Enter your email" />
        </div>
      
      </div>
      <div className=" ">
        <label htmlFor="password" className="text-gray-600  ml-6" >Password</label>
        <div className='mb-6 flex justify-center space-x-2 '>
        <input  type="password" id="password" name="password" className="input w-96" placeholder="Enter your password" />
        </div>
    
        
        
      </div>
      <div className=' flex justify-center space-x-2 '>
      <button className="btn outline-none text-white bg-gradient-to-r from-slate-950 to-emerald-300 hover:from-purple-600 hover:to-emerald-600  md:w-32">Register</button>
      </div>
      <div className="flex justify-center space-x-2">
<div className='text-center mt-2'>

<h4 className='text-black'> Already Have an Account ? <Link className='text-link text-blue-700' to="/login">Login</Link></h4>
</div>
</div>

    </Form>
  </div>
);
};

export default RegisterForm;