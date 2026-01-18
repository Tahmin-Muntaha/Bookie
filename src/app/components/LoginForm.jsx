"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const LogInForm = () => {
    const [error,setError]=useState('')
        const router=useRouter()
        const handleSubmit=(e)=>{
            e.preventDefault()
            const email=e.target?.email?.value
            const pass=e.target?.pass?.value
            if(email==="admin@gmail.com" && pass==="123456"){
                //document.cookie="auth=true;path=/"
                const now = new Date();
            now.setTime(now.getTime() + 1 * 60 * 1000); 
            document.cookie = `auth=true;expires=${now.toUTCString()};path=/`;
                router.push('/')
    
            }
            else{
                setError('Invalid Email or Password')
            }
    
        }
        return (
            <div className="min-h-screen flex items-center justify-center  p-4 mb-20">
          <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Log In</h2>
    
            <form className="space-y-5" onSubmit={handleSubmit}>
             
              <div className="flex flex-col">
                <label className="mb-2 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  defaultValue="admin@gmail.com"
                  name="email"
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
    
              
              <div className="flex flex-col">
                <label className="mb-2 font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  defaultValue="123456"
                  name ="pass"
                  className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
                />
              </div>
    
             
              <button type="submit" className="block w-full text-center bg-[#f8b5c9] hover:bg-[#f3a8c0] text-white font-semibold py-3 rounded-full transition duration-300">
                Log In
              </button>
            </form>
            <p className='text-xs'>{error}</p>
    
            
          </div>
        </div>
        );
};

export default LogInForm;