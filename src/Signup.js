import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({fullname:'',email:'',password:'',number:''});
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem('signupData',JSON.stringify(formData));
    navigate('/Login');
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <form className='p-6 bg-white rounded shadow-2xl' onSubmit={handleSubmit}>
            <h2 className='mb-4 text-xl font-bold text-center'>Sign Up</h2>
            <input className="p-2 mb-2 border rounded w-full" value={formData.fullname} onChange={handleChange} type="text" name="fullname" placeholder='Full Name' required/>
            <input className="p-2 mb-2 border rounded w-full" type="email" name="email" placeholder='Email Address'onChange={handleChange} required/>
            <input className='p-2 mb-2 border rounded w-full' type="password" name="password" placeholder='Password' onChange={handleChange} required/>
            <input className='p-2 mb-2 border rounded w-full' name='number' placeholder='Phone Number' type="number"onChange={handleChange} required/>
            <button className='w-full p-2 text-white bg-blue-500 rounded hover:bg-sky-500/75' type='submit'>
                Sign Up
            </button>
        </form>
    </div>
  )
}
export default Signup;
//onSubmit={handleSubmit}
