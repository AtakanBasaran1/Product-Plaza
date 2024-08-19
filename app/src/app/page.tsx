'use client';
import React, { useState } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {

  interface User {
    email: string,
    password: string
  }

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem('User');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);

        if (parsedUser.email === email && parsedUser.password === password) {
          alert("Login Successful!");
          window.location.href = "/ProducerSelecting";
        } else {
          alert("Login Failed!");
        }
      } else {
        alert("User not found!");
      }
    }
  };



  const registereGit = () => {
    window.location.href = "/Register"
  }

  return (
    <div className="container">

      <form className='flex items-center flex-col mt-[250px]'>

        <div className='ml-[-258px] mt-[-90px] absolute flex flex-col'>
          <h1 className="text-start text-[25px]">Log In</h1>
          <h2 className='text-[15px] text-gray-400 mt-2'>Welcome back!</h2>
        </div>

        <div><input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border-2 border-lightgray-500 mb-4 w-[370px] h-10 rounded-2 p-2' placeholder='E mail adress' /></div>

        <div><input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border-2 border-lightgray-500 w-[370px] h-10 rounded-2 p-2' placeholder='Password' /> <br /></div>

        <div className='ml-[-268px] mt-[35px] font-medium'>
          <label className='text-[15px]' htmlFor="">
            <input
              className='w-[30px] h-[20px] relative top-[4px] cursor-pointer' type="checkbox" />
            Remember
          </label>
        </div>

        <a className='ml-[230px] top-[-25px] text-purple-950 relative decoration-0 font-semibold' href="">Forgot Password?</a>

        <div><button type='button' onClick={handleLogin} className=' mt-2 border-2 border-black w-[370px] bg-black text-white rounded-5 h-10'>Log In</button> <br /></div>
        <p className='text-gray-500 mt-8'>or</p>

        <button className='w-[370px] flex p-2 text-[15px] font-medium items-center rounded-5 border-2 relative border-lightgray h-[40px] '>
          <div className=''>
            <svg
              className='w-[23px] relative mt-[-10px] top-[23px] ml-[95px] '
              xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
              <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
              <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
              <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
              <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
            </svg>
            <p className='ml-[130px] font-semibold'>Log in with Google</p>
          </div>
        </button>
        <div className='flex flex-row'>
          <p className='text-[15px] text-gray-500 mt-3 relative  mr-1'>Don't have an account?</p>
          <button type='button' onClick={registereGit} className='relative top-[16px] font-semibold text-[15px] h-[0px]'>Create an account</button>
        </div>
      </form>

    </div>
  );
}
