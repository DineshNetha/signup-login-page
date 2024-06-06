import React from 'react';
import Signup from './Signup';
import { Link } from 'react-router-dom';

export default function Welcome() {
  const userData=JSON.parse(localStorage.getItem('signupData'))
  return (
    <div className='flex flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-2xl font-bold'>welcome!<br/> {userData.fullname}</h1>
      <Link to="/" className='bg-blue-200 mt-4 text-blue-500 underline text-center'>Go to signup page</Link>
      <Link to="/login" className='bg-blue-200 mt-4 text-blue-500 underline text-center'>Go to Login page</Link>
    </div>
  )
}
