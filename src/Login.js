import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const[formData,setFormData]=useState({email:'',Password:''});
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    const savedData=JSON.parse(localStorage.getItem('signupData'));
    if(savedData.email===formData.email && savedData.password===formData.password){
      navigate('/welcome')
    }else{
      alert('invalid credentials');
    }
  }
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <form className='p-6 bg-white rounded shadow-2xl' onSubmit={handleSubmit}>
        <h2 className='mb-4 text-xl font-bold'>
          Login
        </h2>
        <input className='w-full p-2 mb-2 border rounded' type='email' name='email' placeholder='Email Address' value={formData.email} onChange={handleChange} required/>
        <input className="w-full p-2 mb-2 border rounded" type='password' name='password' placeholder='Password' onChange={handleChange} required/>
        <button className='w-full p-2 text-white bg-blue-500 rounded hover:bg-sky-500/75' type='submit' >Login</button>
      </form>
    </div>
  )
}
